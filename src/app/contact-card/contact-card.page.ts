import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookProviderService } from '../facebook-provider.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.page.html',
  styleUrls: [
    './styles/contact-card.page.scss',
    './styles/contact-card.shell.scss'
  ]
})
export class ContactCardPage implements AfterViewInit {
  user = null;
  profilePicSrc: String;

  constructor(
    public router: Router,
    private facebookProvider: FacebookProviderService
  ) { }

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
    this.facebookProvider.FacebookLogout();
    this.router.navigate(['/walkthrough']);
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
      let userName = document.getElementById("ProfileName");
      //this.profilePicSrc = <HTMLImageElement>document.getElementById("ProfilePic");
      if (ret == null) {
        this.router.navigate(['/walkthrough']);
        userName.innerHTML = "No User";
        this.profilePicSrc = "./assets/sample-images/notifications/karl.jpg";
      }
      else {
        userName.innerHTML = `${ret.name}`;
        this.profilePicSrc = ret.picture.data.url;
      }
    });
  }
}




