export class Team {
  id: number;
  name: string;
  city: string;
  conference: string;
  division: string;
  wins: number;
  losses: number;
  home: string;
  homeWins: number;
  homeLosses: number;
  away: string;
  awayWins: number;
  awayLosses: number;
  lastTen: string;
  lastTenWins: number;
  lastTenLosses: number;
  activeStreak: string;
  percentage: number;
  abbreviation: string;
  stats: object;

  constructor(value: any = {}) {
    Object.assign(this, {
      id: value.id || null,
      name: value.name || null,
      city: value.city || null,
      conference: value.conference || null,
      division: value.division || null,
      wins: value.wins || null,
      losses: value.losses || null,
      home: value.home || null,
      homeWins: value.homeWins || null,
      homeLosses: value.homeLosses || null,
      away: value.away || null,
      awayWins: value.awayWins || null,
      awayLosses: value.awayLosses || null,
      lastTen: value.lastTen || null,
      lastTenWins: value.lastTenWins || null,
      lastTenLosses: value.lastTenLosses || null,
      activeStreak: value.activeStreak || null,
      percentage: value.percentage || null,
      abbreviation: value.abbreviation || null,
      stats: value.stats || null
    });
  }
}
