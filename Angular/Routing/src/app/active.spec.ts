import { TestBed } from '@angular/core/testing';

import { Active } from './active';

describe('Active', () => {
  let service: Active;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Active);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
