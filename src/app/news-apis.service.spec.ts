import { TestBed } from '@angular/core/testing';

import { NewsAPIsService } from './news-apis.service';

describe('NewsAPIsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsAPIsService = TestBed.get(NewsAPIsService);
    expect(service).toBeTruthy();
  });
});
