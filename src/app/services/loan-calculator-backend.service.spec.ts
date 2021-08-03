import { TestBed } from '@angular/core/testing';

import { LoanCalculatorBackend } from './loan-calculator-backend.service';

describe('BackendService', () => {
  let service: LoanCalculatorBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanCalculatorBackend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
