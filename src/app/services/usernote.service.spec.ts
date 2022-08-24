import { TestBed } from '@angular/core/testing';

import { UsernoteService } from './usernote.service';

describe('UsernoteService', () => {
  let service: UsernoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
