import { TestBed } from '@angular/core/testing';

import { GooglecloudvisionserviceService } from './googlecloudvisionservice.service';

describe('GooglecloudvisionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglecloudvisionserviceService = TestBed.get(GooglecloudvisionserviceService);
    expect(service).toBeTruthy();
  });
});
