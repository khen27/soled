import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss'
  ]
})
export class CategoriesPage { 
  constructor(
    public router: Router

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
}
