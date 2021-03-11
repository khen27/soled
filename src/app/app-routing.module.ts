import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/walkthrough',
    pathMatch: 'full'
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedPageModule)
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'auth/signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'auth/forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contact-card',
    loadChildren: () => import('./contact-card/contact-card.module').then(m => m.ContactCardPageModule)
  },
  {
    path: 'forms-and-validations',
    loadChildren: () => import('./forms/validations/forms-validations.module').then(m => m.FormsValidationsPageModule)
  },
  {
    path: 'forms-filters',
    loadChildren: () => import('./forms/filters/forms-filters.module').then(m => m.FormsFiltersPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: 'showcase',
    loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcasePageModule)
  },
  {
    path: 'firebase',
    redirectTo: 'firebase/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'firebase/auth',
    loadChildren: () => import('./firebase/auth/firebase-auth.module').then(m => m.FirebaseAuthModule)
  },
  {
    path: 'firebase/crud',
    loadChildren: () => import('./firebase/crud/firebase-crud.module').then(m => m.FirebaseCrudModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule)
  },
  {
    path: 'video-playlist',
    loadChildren: () => import('./video-playlist/video-playlist.module').then(m => m.VideoPlaylistPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'raffle',
    loadChildren: () => import('./raffle/raffle.module').then( m => m.RafflePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'auction',
    loadChildren: () => import('./auction/auction.module').then( m => m.AuctionPageModule)
  },
  {
    path: 'buy-bids',
    loadChildren: () => import('./buy-bids/buy-bids.module').then( m => m.BuyBidsPageModule)
  },
  {
    path: 'purchase-history',
    loadChildren: () => import('./purchase-history/purchase-history.module').then( m => m.PurchaseHistoryPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'admin-portal',
    loadChildren: () => import('./admin-portal/admin-portal.module').then( m => m.AdminPortalPageModule)
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // This value is required for server-side rendering to work.
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
