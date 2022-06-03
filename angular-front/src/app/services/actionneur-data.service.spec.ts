import { TestBed } from '@angular/core/testing';

import { ActionneurDataService } from './actionneur-data.service';

describe('ActionneurDataService', () => {
  let service: ActionneurDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionneurDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
