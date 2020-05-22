import { TestBed } from '@angular/core/testing';

import { Websocket.Service.TsService } from './websocket.service.ts.service';

describe('Websocket.Service.TsService', () => {
  let service: Websocket.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Websocket.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
