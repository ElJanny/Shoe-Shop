import { TestBed } from '@angular/core/testing';

import { JSONService } from './json.service';

describe('JSONService', () => {
  let service: JSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
