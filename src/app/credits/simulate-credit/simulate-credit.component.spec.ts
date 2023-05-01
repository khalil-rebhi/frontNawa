import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateCreditComponent } from './simulate-credit.component';

describe('SimulateCreditComponent', () => {
  let component: SimulateCreditComponent;
  let fixture: ComponentFixture<SimulateCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
