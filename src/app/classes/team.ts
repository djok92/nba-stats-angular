export class Team {
  name: string;
  city: string;
  conference: string;
  division: string;
  wins: number;
  losses: string;

  constructor(value: any = {}) {
    Object.assign(this, {
      name: value.name || null,
      city: value.city || null,
      conference: value.conference || null,
      division: value.division || null,
      wins: value.wins || null,
      losses: value.losses || null
    });
  }
}
