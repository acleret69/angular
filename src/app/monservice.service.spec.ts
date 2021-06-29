import { TestBed } from '@angular/core/testing';

import { MonServiceService } from './monservice.service';

describe('MonserviceService', () => {
  let service: MonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
