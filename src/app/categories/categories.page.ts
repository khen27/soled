import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
//import { /*IonSlides, ModalController, MenuController, IonRouterOutlet,*/ isPlatform } from '@ionic/angular';

import { FacebookProviderService } from '../facebook-provider.service';
import { profile } from 'console';
import * as firebase from 'firebase';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss'
  ]
})
export class CategoriesPage implements AfterViewInit {
  user = null;
  myFirebaseAuthObserver: firebase.Unsubscribe = undefined;
  profilePicSrc: string;
  clickHandled: Boolean = false;
  auctionsRef : firebase.database.Reference = null;
  liveAucs = {};
  pastAucs = {};

  constructor(
    public router: Router,
    private facebookProvider: FacebookProviderService
  ) { }

  slideOptions = {
    slidesPerView: 1.5
  };

  // Disable side menu for this page
  ionViewDidEnter(): void {
    //this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    //this.menu.enable(true);
  }

  ngAfterViewInit(): void {
    console.log("Im here1");
    this.facebookProvider.getUser().then((ret) => {
      if (ret == null) {
        firebase.auth().signOut()
        .then(() => {
          console.log("firebase logout success!");
        })
        .catch((error) => {
          console.log("firebase logout error (", error.code, "): ", error.message);
        });
        this.router.navigate(['walkthrough']);
      }
      else {
        let userGreeting = document.getElementById("UserGreeting");
        //this.profilePic = <HTMLImageElement>document.getElementById("ProfilePic");
    
        userGreeting.innerHTML = `Hey ${ret.name},`;
        console.log("Im here: ",ret);
        this.profilePicSrc = ret.picture.data.url;
        //this.profilePic.src = ret.picture.data.url;
        this.myFirebaseAuthObserver = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.auctionsRef = firebase.database().ref('auctions');
            this.auctionsRef.on('child_added', (data) => {
              this.addAuction(data);
            });
            this.auctionsRef.on('child_changed', (data) => {
              this.setAuction(data);
            });
            this.auctionsRef.on('child_removed', (data) => {
              this.deleteAuction(data);
            });
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

  addAuction(data: firebase.database.DataSnapshot): void {
    var myValue = data.val();
    var imageRef = firebase.storage().ref(myValue.aucPic);
    imageRef.getDownloadURL().then((url) => {
      console.log(url);
      myValue.aucPic = url;
      if (myValue.aucEnd < 1922) {
        this.pastAucs[data.key] = myValue;
      }
      else {
        this.liveAucs[data.key] = myValue;
      }
    });
  }

  setAuction(data: firebase.database.DataSnapshot): void{
    var myValue = data.val();
    var imageRef = firebase.storage().ref(myValue.aucPic);
    imageRef.getDownloadURL().then((url) => {
      console.log(url);
      myValue.aucPic = url;
      if (myValue.aucEnd < 1922) {
        this.pastAucs[data.key] = myValue;
      }
      else {
        this.liveAucs[data.key] = myValue;
      }
    });
  }

  deleteAuction(data: firebase.database.DataSnapshot): void{
    if (data.val().aucEnd < 1922) {
      this.pastAucs[data.key] = null;
    }
    else {
      this.liveAucs[data.key] = null;
    }
  }
  launchProfilePage(): void {
    console.log('launch profile page');
    this.router.navigate(['app/contact-card']);
  }

  launchStorePage(): void {
    console.log('launch store landing page');
    this.router.navigate(['/app/categories/fashion']);
  }

  launchRafflePage(): void {
    console.log('launch raffle page (not implemented yet)');
  }

  launchCartPage(): void {
    console.log('launch cart page (not implemented yet)');
  }

  launchFashionDetailsPage(): void {
    this.propagationHandler(() => {
      console.log('launch fashion details page (not implemented yet)');
    });
  }

  launchShareSystem(): void {
    this.propagationHandler(() => {
      console.log('launch share system (not implemented yet)');
    });
  }

  launchAuctionPage(): void {
    this.propagationHandler(() => {
      console.log('launch auction page (not implemented yet)');
    });
  }

  propagationHandler(resolve: Function) {
    if (this.clickHandled) return;
    resolve();
    this.clickHandled = true;
    setTimeout(() => { console.log("reset the click trigger"); this.clickHandled = false; }, 0);
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
