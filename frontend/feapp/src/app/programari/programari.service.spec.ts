import { TestBed } from '@angular/core/testing';

import { ProgramariService } from './programari.service';

describe('ProgramariService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramariService = TestBed.get(ProgramariService);
    expect(service).toBeTruthy();
  });
});
