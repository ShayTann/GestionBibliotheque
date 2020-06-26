import { TestBed } from '@angular/core/testing';

import { FilterBooksService } from './filter-books.service';

describe('FilterBooksService', () => {
  let service: FilterBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
