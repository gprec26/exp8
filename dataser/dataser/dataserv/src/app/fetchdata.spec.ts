import { TestBed } from '@angular/core/testing';

import { Fetchdata } from './fetchdata';

describe('Fetchdata', () => {
  let service: Fetchdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fetchdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
