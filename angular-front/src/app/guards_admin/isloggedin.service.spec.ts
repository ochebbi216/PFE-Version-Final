import { TestBed } from '@angular/core/testing';

import { IsloggedinServiceA } from './isloggedin.service';

describe('IsloggedinService', () => {
  let service: IsloggedinServiceA;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsloggedinServiceA);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
