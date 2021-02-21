import { TestBed } from '@angular/core/testing';

import { FacebookProviderService } from './facebook-provider.service';

describe('FacebookProviderService', () => {
  let service: FacebookProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
