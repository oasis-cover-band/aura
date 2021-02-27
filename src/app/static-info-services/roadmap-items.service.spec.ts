import { TestBed } from '@angular/core/testing';

import { RoadmapItemsService } from './roadmap-items.service';

describe('RoadmapItemsService', () => {
  let service: RoadmapItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadmapItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
