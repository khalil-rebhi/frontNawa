import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementsByCreditComponent } from './payements-by-credit.component';

describe('PayementsByCreditComponent', () => {
  let component: PayementsByCreditComponent;
  let fixture: ComponentFixture<PayementsByCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementsByCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementsByCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
