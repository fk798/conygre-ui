import { TestBed } from '@angular/core/testing';

import { SpringServiceService } from './spring-service.service';

describe('SpringServiceService', () => {
  let service: SpringServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
