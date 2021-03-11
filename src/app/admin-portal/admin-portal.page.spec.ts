import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPortalPage } from './admin-portal.page';

describe('AdminPortalPage', () => {
  let component: AdminPortalPage;
  let fixture: ComponentFixture<AdminPortalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPortalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
