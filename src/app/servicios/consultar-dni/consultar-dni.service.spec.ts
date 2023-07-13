import { TestBed } from '@angular/core/testing';

import { ConsultarDniService } from './consultar-dni.service';

describe('ConsultarDniService', () => {
  let service: ConsultarDniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarDniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
