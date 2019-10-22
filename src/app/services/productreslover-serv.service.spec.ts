import { TestBed } from '@angular/core/testing';

import { ProductresloverServService } from './productreslover-serv.service';

describe('ProductresloverServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductresloverServService = TestBed.get(ProductresloverServService);
    expect(service).toBeTruthy();
  });
});
