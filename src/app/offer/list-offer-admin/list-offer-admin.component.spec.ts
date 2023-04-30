import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfferAdminComponent } from './list-offer-admin.component';

describe('ListOfferAdminComponent', () => {
  let component: ListOfferAdminComponent;
  let fixture: ComponentFixture<ListOfferAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfferAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
