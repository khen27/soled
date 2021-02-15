import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, ViewChild, HostBinding, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { IonSlides, ModalController, MenuController, IonRouterOutlet, isPlatform } from '@ionic/angular';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';

import { FacebookLoginPlugin, FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
//import { isPlatform } from '@ionic/angular'; // Already imoorted above...
registerWebPlugin(FacebookLogin);

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: [
    './styles/walkthrough.page.scss',
    './styles/walkthrough.shell.scss',
    './styles/walkthrough.responsive.scss'
  ]
})
export class WalkthroughPage implements AfterViewInit {
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  fbLogin: FacebookLoginPlugin;
  user = null;
  token = null;
  aString = null;//"A string I made";
  aInt = null;//7;
  
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  @HostBinding('class.first-slide-active') isFirstSlide = true;

  @HostBinding('class.last-slide-active') isLastSlide = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public menu: MenuController,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    private http: HttpClient
  ) { 
    this.setupFbLogin();
  }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    this.menu.enable(true);
  }

  ngAfterViewInit(): void {
    // Accessing slides in server platform throw errors
    if (isPlatformBrowser(this.platformId)) {
      // ViewChild is set
      this.slides.isBeginning().then(isBeginning => {
        this.isFirstSlide = isBeginning;
      });
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });

      // Subscribe to changes
      this.slides.ionSlideWillChange.subscribe(changes => {
        this.slides.isBeginning().then(isBeginning => {
          this.isFirstSlide = isBeginning;
        });
        this.slides.isEnd().then(isEnd => {
          this.isLastSlide = isEnd;
        });
      });
    }
  }

  skipWalkthrough(): void {
    // Skip to the last slide
    this.slides.length().then(length => {
      this.slides.slideTo(length);
    });
  }

// This ain't my Facebook login..
doGoogleSignup(): void {
  console.log('google signup');
  this.router.navigate(['app/categories']);
}

// But this one is!
async setupFbLogin() {
  if (isPlatform('desktop')) {
    this.fbLogin = FacebookLogin;
  }
  else {
    // Use the native imlementation inside a real app!
    const { FacebookLogin } = Plugins;
    this.fbLogin = FacebookLogin;
  }
}

// And this one too!
async FacebookLogin() {
  const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
  const result = await this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  // console.log('result: ', result);
  // console.log('aString: ',this.aString);
  // console.log('aInt: ',this.aInt);
  // this.aString = "Some text";
  // this.aInt = 7;
  // console.log('testing change in the same page');
  // console.log('aString: ',this.aString);
  // console.log('aInt: ',this.aInt);
  if (result.accessToken && result.accessToken.userId) {
    this.token = result.accessToken;
    await this.loadUserData(); ///////////
  }
  else if (result.accessToken && !result.accessToken.userId) {
    // Web only gets the token but not the user ID
    // Directly call get token to retrieve it now
    await this.getCurrentToken(); ////////
  }
  else {
    // Login failed
    return
  }

  console.log('facebook signup, user: ', this.user);
  // this.router.navigate(['app/categories'], navigationExtras);
  //document.getElementById("LoginText").innerHTML = this.user.name;
}

// This one's mine TOO
async getCurrentToken() {
  const result = await this.fbLogin.getCurrentAccessToken();

  if (result.accessToken) {
    this.token = result.accessToken;
    await this.loadUserData(); ///////////////////////////////
  }
  else {
    // Not logged in.
  }
}

// This one's part of Facebook login too.
async loadUserData() {
  const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
  this.http.get(url).subscribe(res => {
    //console.log('user: ', res);
    this.user = res;
  });
}

// And this one too (for logging out though)
async FacebookLogout() {
  await this.fbLogin.logout();
  this.user = null;
  this.token = null;
}

  // let navigationExtras: NavigationExtras = {
  //   state: {
  //     user: this.user,
  //     tString: this.aString,
  //     tInt: this.aInt
  //   }
  // };

  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
