import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyBidsPageRoutingModule } from './buy-bids-routing.module';

import { BuyBidsPage } from './buy-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyBidsPageRoutingModule
  ],
  declarations: [BuyBidsPage]
})
export class BuyBidsPageModule {}
