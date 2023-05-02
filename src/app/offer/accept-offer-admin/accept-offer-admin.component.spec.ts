import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptOfferAdminComponent } from './accept-offer-admin.component';

describe('AcceptOfferAdminComponent', () => {
  let component: AcceptOfferAdminComponent;
  let fixture: ComponentFixture<AcceptOfferAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptOfferAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptOfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
