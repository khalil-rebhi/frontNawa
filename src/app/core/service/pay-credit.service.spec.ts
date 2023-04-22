import { TestBed } from '@angular/core/testing';

import { PayCreditService } from './pay-credit.service';

describe('PayCreditService', () => {
  let service: PayCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
