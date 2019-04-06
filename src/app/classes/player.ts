export class Player {
  id: number;
  name: string;
  birthYear: string;
  photo: string;
  salary: string;
  height: string;
  weight: string;
  experience: number;
  jerseyNumber: number;
  stats: object;

  constructor(value: any = {}) {
    Object.assign(this, {
      id: value.id || null,
      name: value.name || null,
      birthYear: value.birthYear || null,
      photo: value.photo || null,
      salary: value.salary || null,
      height: value.height || null,
      weight: value.weight || null,
      experience: value.experience || null,
      jerseyNumber: value.jerseyNumber || null,
      stats: value.stats || null,
    });
  }
}
