import { TestBed } from '@angular/core/testing';

import { CoffeeGoServices } from './coffee-go-services';

describe('CoffeeGoServices', () => {
  let service: CoffeeGoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeGoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
