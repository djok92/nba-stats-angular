export class TeamStats {
  id: number;
  name: string;
  wins: number;
  losses: number;
  pointsPerGame: string;
  reboundsPerGame: string;
  assistsPerGame: string;
  stealsPerGame: string;
  turnoversPerGame: string;
  threePointersPerGame: string;
  threePointersPercentage: string;
  twoPointersPerGame: string;
  twoPointersPercentage: string;
  plusMinus: number;

  constructor(value: any = {}) {
    Object.assign(this, {
      id: value.id || null,
      name: value.name || null,
      wins: value.wins || null,
      losses: value.losses || null,
      pointsPerGame: value.pointsPerGame || null,
      reboundsPerGame: value.reboundsPerGame || null,
      assistsPerGame: value.assistsPerGame || null,
      stealsPerGame: value.stealsPerGame || null,
      turnoversPerGame: value.turnoversPerGame || null,
      threePointersPerGame: value.threePointersPerGame || null,
      threePointersPercentage: value.threePointersPercentage || null,
      twoPointersPerGame: value.twoPointersPerGame || null,
      twoPointersPercentage: value.twoPointersPercentage || null,
      plusMinus: value.plusMinus || null
    });
  }
}
