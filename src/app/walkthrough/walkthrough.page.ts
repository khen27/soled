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
//registerWebPlugin(FacebookLogin);

import { FacebookProviderService } from '../facebook-provider.service';

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
  
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  @HostBinding('class.first-slide-active') isFirstSlide = true;

  @HostBinding('class.last-slide-active') isLastSlide = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public menu: MenuController,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    private http: HttpClient,
    private facebookProvider: FacebookProviderService
  ) { 
    //this.setupFbLogin();
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

// // But this one is!
// async setupFbLogin() {
//   if (isPlatform('desktop')) {
//     this.fbLogin = FacebookLogin;
//   }
//   else {
//     // Use the native imlementation inside a real app!
//     const { FacebookLogin } = Plugins;
//     this.fbLogin = FacebookLogin;
//   }
// }

// And this one too!
async FacebookLogin() {
  var loginText = document.getElementById("LoginText");
  const res = await this.facebookProvider.FacebookLogin();
  if (res) {
    const user = this.facebookProvider.getUser();
    loginText.innerHTML = `Hi ${user.name}`;
    this.router.navigate(['app/categories']);
  }
  else { 
    loginText.innerHTML = "Failed to Login, please try again"
  }
  // console.log("Test 1: FacebookLogin() Starting");
  // const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
  // const result = await this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  // console.log("Test 2: result(from fbLogin.login) != undefined ? (true) ", (result != undefined));
  // if (result.accessToken && result.accessToken.userId) {
  //   this.token = result.accessToken;
  //   this.loadUserData(); 
  // }
  // else if (result.accessToken && !result.accessToken.userId) {
  //   console.log("Test 3: I'm on the web");
  //   // Web only gets the token but not the user ID
  //   // Directly call get token to retrieve it now
  //   await this.getCurrentToken(); 
  // }
  // else {
  //   // Login failed
  //   return
  // }
  // console.log("Test 9: Completing login. I don't believe Test 8 will have run yet, so user below is still undefined huh?");
  // console.log('facebook signup, user: ', this.user);
  // //this.router.navigate(['app/categories']);
  // document.getElementById("LoginText").innerHTML = `Hi ${this.user.name}`;
}

// // This one's mine TOO
// async getCurrentToken() {
//   console.log("Test 4: getCurrentToken() Starting");
//   const result = await this.fbLogin.getCurrentAccessToken();
//   console.log("Test 5: result(from fbLogin.GetCurrentAccessToken() != undefined ? (true) ", (result != undefined));
//   if (result.accessToken) {
//     this.token = result.accessToken;
//     await this.loadUserData(); 
//     console.log("Test 7***: this.http.get(url).subscribe(callback) is run outside of this stack I'm guessing")
//   }
//   else {
//     // Not logged in.
//   }
// }

// // This one's part of Facebook login too.
// async loadUserData() {
//   console.log("Test 6: loadUserData() Starting");
//   console.log("Test 7: token = ", this.token);
//   const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
//   const res = await this.http.get(url).toPromise(); //.then(res => {
//     //console.log("Test 8: Supposed to be setting user. But hmmm, this'll run after 7*** won't it huh?");
//     //console.log('user: ', res);
//     //this.user = res;
//   //});
//   console.log("Test 8***: doing the callback outside of the observable");
//   console.log('user: ', res);
//   this.user = res;
// }

// // And this one too (for logging out though)
// async FacebookLogout() {
//   await this.fbLogin.logout();
//   this.user = null;
//   this.token = null;
// }

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
