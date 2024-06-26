import { TestBed } from '@angular/core/testing';

import { PhonewithflagsService } from './phonewithflags.service';

describe('PhonewithflagsService', () => {
  let service: PhonewithflagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonewithflagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
