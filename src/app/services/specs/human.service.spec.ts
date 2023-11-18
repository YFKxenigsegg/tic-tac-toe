import { TestBed } from '@angular/core/testing';

import { HumanService } from '../online.service';

describe('HumanService', () => {
  let service: HumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
