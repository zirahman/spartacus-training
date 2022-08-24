import { TestBed } from '@angular/core/testing';

import { CustomUpdateprofileService } from './custom-updateprofile.service';

describe('CustomUpdateprofileService', () => {
  let service: CustomUpdateprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomUpdateprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
