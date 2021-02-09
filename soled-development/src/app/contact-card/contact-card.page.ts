import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.page.html',
  styleUrls: [
    './styles/contact-card.page.scss',
    './styles/contact-card.shell.scss'
  ]
})
export class ContactCardPage { 

  constructor(
    public router: Router

  ){}
  
  // enable push notifications 
  pushNotificationsEnabled(ionicButton){
    if(ionicButton.color === 'dark'){
      ionicButton.color = 'danger';
      console.log('turing on');
    }
    else{
      ionicButton.color = 'dark';
      console.log('turing off');
    }
  }

  returnHome(): void {
    console.log('go back to landing page');
    this.router.navigate(['/app/categories']);
  }
}




