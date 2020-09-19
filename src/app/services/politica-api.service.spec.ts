import { TestBed } from '@angular/core/testing';

import { PoliticaApiService } from './politica-api.service';

describe('PoliticaApiService', () => {
  let service: PoliticaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
