import { TestBed } from '@angular/core/testing';

import { PasserelleDataService } from './passerelle-data.service';

describe('PasserelleDataService', () => {
  let service: PasserelleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasserelleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
