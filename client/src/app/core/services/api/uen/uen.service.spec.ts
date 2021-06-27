import { TestBed } from '@angular/core/testing';

import { UenService } from './uen.service';

describe('UenService', () => {
  let service: UenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
