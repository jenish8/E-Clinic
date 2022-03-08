import { TestBed } from '@angular/core/testing';

import { ShoService } from './sho.service';

describe('ShoService', () => {
  let service: ShoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
