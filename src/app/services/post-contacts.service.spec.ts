import { TestBed } from '@angular/core/testing';

import { PostContactsService } from './post-contacts.service';

describe('PostContactsService', () => {
  let service: PostContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
