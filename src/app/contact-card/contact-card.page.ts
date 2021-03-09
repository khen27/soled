import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookProviderService } from '../facebook-provider.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.page.html',
  styleUrls: [
    './styles/contact-card.page.scss',
    './styles/contact-card.shell.scss'
  ]
})
export class ContactCardPage implements AfterViewInit {
  user: firebase.User = null;
  myFirebaseAuthObserver: firebase.Unsubscribe = undefined;
  profilePicSrc: String;

  constructor(
    public router: Router,
    private facebookProvider: FacebookProviderService
  ) { }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    //this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    //this.menu.enable(true);
  }

  ngAfterViewInit(): void {
    this.facebookProvider.getUser()
    .then((ret) => {
      if (ret == null) {
        firebase.auth().signOut()
        .then(() => {
          console.log("firebase logout success!");
        })
        .catch((error) => {
          console.log("firebase logout error (", error.code, "): ", error.message);
        });
        this.router.navigate(['/walkthrough'])
      }
      else {
        let userName = document.getElementById("ProfileName");
        userName.innerHTML = `${ret.name}`;
        this.profilePicSrc = ret.picture.data.url;
        this.myFirebaseAuthObserver = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
          }
          else {
            this.facebookProvider.facebookLogout();
            this.router.navigate(['walkthrough']);
            this.myFirebaseAuthObserver();
          }
        });
      }
    });
  }

  // enable push notifications 
  pushNotificationsEnabled(ionicButton) {
    if (ionicButton.color === 'dark') {
      ionicButton.color = 'danger';
      console.log('turing on');
    }
    else {
      ionicButton.color = 'dark';
      console.log('turing off');
    }
  }

  returnHome(): void {
    console.log('go back to landing page');
    this.router.navigate(['/app/categories']);
  }

  launchAboutUsPage(): void {
    console.log('launch about us page (not implemented yet)')
  }

  logout(): void {
    console.log('logging out');
    this.facebookProvider.facebookLogout();
    this.router.navigate(['/walkthrough']);
  }

  writeData(): void {
    console.log('writing data');
    let res = this.facebookProvider.getUser();
    res.then((ret) => {
      if (ret == null) {
        firebase.database().ref('lastUser').set({
          name: 'anonymous'
        });
      }
      else {
        firebase.database().ref('lastUser').set({
          name: ret.name
        });
      }
    });
  }

}