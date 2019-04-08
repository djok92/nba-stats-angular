import { TestBed, async, inject } from '@angular/core/testing';

import { PlayersGuard } from './players.guard';

describe('PlayersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersGuard]
    });
  });

  it('should ...', inject([PlayersGuard], (guard: PlayersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
