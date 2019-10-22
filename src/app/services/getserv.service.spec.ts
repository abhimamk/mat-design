import { TestBed } from '@angular/core/testing';

import { GetservService } from './getserv.service';

describe('GetservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetservService = TestBed.get(GetservService);
    expect(service).toBeTruthy();
  });
});
