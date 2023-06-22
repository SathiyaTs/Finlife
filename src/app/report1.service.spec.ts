import { TestBed } from '@angular/core/testing';

import { REPORT1Service } from './report1.service';

describe('REPORT1Service', () => {
  let service: REPORT1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REPORT1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
