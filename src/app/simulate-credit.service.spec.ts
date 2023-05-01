import { TestBed } from '@angular/core/testing';

import { SimulateCreditService } from './simulate-credit.service';

describe('SimulateCreditService', () => {
  let service: SimulateCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulateCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
