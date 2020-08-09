import { TestBed } from '@angular/core/testing';

import { ParametrosGuard } from './parametros.guard';

describe('ParametrosGuard', () => {
  let guard: ParametrosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParametrosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
