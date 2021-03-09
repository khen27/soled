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
import firebase from 'firebase';

const { Storage } = Plugins;

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
  ) { }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    this.menu.enable(true);
    var loginText = document.getElementById("LoginText");
    loginText.innerHTML = "";
  }

  ngAfterViewInit(): void {
    // Check for existing Facebook data, bypass walkthrough screen if credentials are validated
    this.facebookProvider.getUser()
    .then((res) => {
      if (res != null) {
        if (firebase.auth().currentUser != null) {
          this.router.navigate(['app/categories']); 
        }
        else {
          this.facebookProvider.facebookLogout(); 
        }
      }
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
    });
  }

  skipWalkthrough(): void {
    // Skip to the last slide
    this.slides.length().then(length => {
      this.slides.slideTo(length);
    });
  }

  // And this one too!
  async FacebookLogin() {
    var loginText = document.getElementById("LoginText");
    const keys = await Storage.keys();
    console.log("Keys: ", keys);
    const res = await this.facebookProvider.facebookLogin();
    if (res) {
      const user = await this.facebookProvider.getUser();
      loginText.innerHTML = `Hi ${user.name}`;
      this.router.navigate(['app/categories']);
    }
    else {
      loginText.innerHTML = "Failed to Login, please try again"
    }
  }

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
