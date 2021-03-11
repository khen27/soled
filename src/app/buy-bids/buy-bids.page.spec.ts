import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyBidsPage } from './buy-bids.page';

describe('BuyBidsPage', () => {
  let component: BuyBidsPage;
  let fixture: ComponentFixture<BuyBidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
