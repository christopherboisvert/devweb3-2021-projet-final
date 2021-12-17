import { TestBed } from '@angular/core/testing';

import { GreenstockService } from './greenstock.service';

describe('GreenstockService', () => {
  let service: GreenstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
