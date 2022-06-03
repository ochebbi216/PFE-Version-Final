import { TestBed } from '@angular/core/testing';

import { ReclamationDataService } from './reclamation-data.service';

describe('ReclamationDataService', () => {
  let service: ReclamationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
