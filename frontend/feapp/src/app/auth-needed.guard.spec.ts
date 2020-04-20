import { TestBed, async, inject } from '@angular/core/testing';

import { AuthNeededGuard } from './auth-needed.guard';

describe('AuthNeededGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthNeededGuard]
    });
  });

  it('should ...', inject([AuthNeededGuard], (guard: AuthNeededGuard) => {
    expect(guard).toBeTruthy();
  }));
});
