import { TestBed } from '@angular/core/testing';

import { MoneyDescriptionService } from './money-description.service';

describe('MoneyDescriptionService', () => {
  let service: MoneyDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
