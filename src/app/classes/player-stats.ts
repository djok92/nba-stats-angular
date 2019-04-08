export class PlayerStats {

  name: string;
  position: string;
  gamesPlayed: number;
  gamesStarted: number;
  pointsPerGame: string;
  assistsPerGame: string;
  reboundsPerGame: string;
  stealsPerGame: string;
  blocksPerGame: string;
  turnoversPerGame: string;
  fieldGoalsPercentage: string;
  freeThrowsPercentage: string;
  threePointersPercentage: string;

  constructor(value: any = {}) {
    Object.assign(this, {
      name: value.name || null,
      position: value.position || null,
      gamesPlayed: value.gamesPlayed || null,
      gamesStarted: value.gamesStarted || null,
      pointsPerGame: value.pointsPerGame || null,
      assistsPerGame: value.assistsPerGame || null,
      reboundsPerGame: value.reboundsPerGame || null,
      stealsPerGame: value.stealsPerGame || null,
      blocksPerGame: value.blocksPerGame || null,
      turnoversPerGame: value.turnoversPerGame || null,
      fieldGoalsPercentage: value.fieldGoalsPercentage || null,
      freeThrowsPercentage: value.freeThrowsPercentage || null,
      threePointersPercentage: value.threePointersPercentage || null
    });
  }
}
