import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
//import { /*IonSlides, ModalController, MenuController, IonRouterOutlet,*/ isPlatform } from '@ionic/angular';

import { FacebookProviderService } from '../facebook-provider.service';


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

  constructor(
    public router: Router,
    private facebookProvider: FacebookProviderService
  ){}
  
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

  // Disable side menu for this page
  ionViewDidEnter(): void {
    //this.menu.enable(false);
  }
  
  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    //this.menu.enable(true);
  }
  
  ngAfterViewInit(): void {
    this.user = this.facebookProvider.getUser();
    let userGreeting = document.getElementById("UserGreeting");
    if (this.user == null) {
      userGreeting.innerHTML = "Hi, no one is online. This screen shouldn't be viewable."
    }
    else {
      userGreeting.innerHTML = `Hey ${this.user.name},`
    }

    // Accessing slides in server platform throw errors
    // if (isPlatformBrowser(this.platformId)) {
    //   // ViewChild is set
    //   this.slides.isBeginning().then(isBeginning => {
    //     this.isFirstSlide = isBeginning;
    //   });
    //   this.slides.isEnd().then(isEnd => {
    //     this.isLastSlide = isEnd;
    //   });
  
    //   // Subscribe to changes
    //   this.slides.ionSlideWillChange.subscribe(changes => {
    //     this.slides.isBeginning().then(isBeginning => {
    //       this.isFirstSlide = isBeginning;
    //     });
    //     this.slides.isEnd().then(isEnd => {
    //       this.isLastSlide = isEnd;
    //     });
    //   });
    // }
  }
}
