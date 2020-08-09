import { TestBed } from '@angular/core/testing';

import { MaestroGuard } from './maestro.guard';

describe('MaestroGuard', () => {
  let guard: MaestroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaestroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
