import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { FashionListingModel } from './fashion-listing.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fashion-listing',
  templateUrl: './fashion-listing.page.html',
  styleUrls: [
    './styles/fashion-listing.page.scss',
    './styles/fashion-listing.shell.scss'
  ]
})
export class FashionListingPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  listing: FashionListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  slideOptions = {
    slidesPerView: 2.3
  };

  ngOnInit(): void {
    this.subscriptions = this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<FashionListingModel>) => {
        return ResolverHelper.extractData<FashionListingModel>(resolvedRouteData.data, FashionListingModel);
      })
    )
    .subscribe((state) => {
      this.listing = state;
    }, (error) => console.log(error));
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }

  launchBuyBidsPage(): void {
    console.log('launch buy bids page (not implemented yet)');
  }

  launchCartPage(): void {
    console.log('launch cart page (not implemented yet)');
  }

  launchFashionDetailsPage(): void {
    console.log('launch fashion details page (not implemented yet)');
  }

  returnHome(): void {
    console.log('go back to landing page');
    this.router.navigate(['/app/categories']);
  }

}
