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
  profilePic: HTMLImageElement;
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

  // Disable side menu for this page
  ionViewDidEnter(): void {
    //this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    //this.menu.enable(true);
  }

  ngAfterViewInit(): void {
    let res = this.facebookProvider.getUser();
    res.then((ret) => {
      let userGreeting = document.getElementById("UserGreeting");
      this.profilePic = <HTMLImageElement>document.getElementById("ProfilePic");
      if (ret == null) {
        userGreeting.innerHTML = "Hi, no one is online. This screen shouldn't be viewable.";
        this.profilePic.src = "https://habib.al-mawali.com/wp-content/uploads/IMG_4838-1-768x768.jpg";
        this.router.navigate(['walkthrough']);
        return false;
      }
      else {
        userGreeting.innerHTML = `Hey ${ret.name},`;
        this.profilePic.src = ret.picture.data.url;
        return true;
      }
    }).then((success) => {
      if (!success) {return;}
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
    });
  }
  
  addAuction(data: firebase.database.DataSnapshot): void {
    if (data.val().aucEnd < 1922) {
      this.pastAucs[data.key] = data.val();
    }
    else {
      this.liveAucs[data.key] = data.val();
    }
  }

  setAuction(data: firebase.database.DataSnapshot): void{
    if (data.val().aucEnd < 1922) {
      this.pastAucs[data.key] = data.val();
    }
    else {
      this.liveAucs[data.key] = data.val();
    }
  }

  deleteAuction(data: firebase.database.DataSnapshot): void{
    if (data.val().aucEnd < 1922) {
      this.pastAucs[data.key] = null;
    }
    else {
      this.liveAucs[data.key] = null;
    }
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
