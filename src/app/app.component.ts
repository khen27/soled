import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SeoService } from './utils/seo/seo.service';
const { SplashScreen } = Plugins;
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HistoryHelperService } from './utils/history-helper.service';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDi1CYzU-nnDzNPBHISRXmIXVpKnBUp5u4",
  authDomain: "soled-70036.firebaseapp.com",
  projectId: "soled-70036",
  databaseURL: "https://soled-70036-default-rtdb.firebaseio.com/",
  storageBucket: "soled-70036.appspot.com",
  messagingSenderId: "680593845598",
  appId: "1:680593845598:web:d868ff90b1df3cd2bbb3cf",
  measurementId: "G-8VNZTR5ZB2"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  appPages = [
    {
      title: 'Categories',
      url: '/app/categories',
      ionicIcon: 'list-outline'
    },
    {
      title: 'Profile',
      url: '/app/user',
      ionicIcon: 'person-outline'
    },
    {
      title: 'Contact Card',
      url: '/contact-card',
      customIcon: './assets/custom-icons/side-menu/contact-card.svg'
    },
    {
      title: 'Notifications',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    }
  ];
  accountPages = [
    {
      title: 'Log In',
      url: '/auth/login',
      ionicIcon: 'log-in-outline'
    },
    {
      title: 'Sign Up',
      url: '/auth/signup',
      ionicIcon: 'person-add-outline'
    },
    {
      title: 'Tutorial',
      url: '/walkthrough',
      ionicIcon: 'school-outline'
    },
    {
      title: 'Getting Started',
      url: '/getting-started',
      ionicIcon: 'rocket-outline'
    },
    {
      title: '404 page',
      url: '/page-not-found',
      ionicIcon: 'alert-circle-outline'
    }
  ];

  textDir = 'ltr';

  // Inject HistoryHelperService in the app.components.ts so its available app-wide
  constructor(
    public translate: TranslateService,
    public historyHelper: HistoryHelperService,
    private seoService: SeoService
  ) {
    this.initializeApp();
    this.setLanguage();
  }

  async initializeApp() {
    try {
     await SplashScreen.hide();
    } catch (err) {
     console.log('This is normal in a browser', err);
    }
    firebase.initializeApp(firebaseConfig);
  }

  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
    // });
  }

}
