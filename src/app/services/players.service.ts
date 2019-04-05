import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Team, Player } from '../classes';
import { pipe, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  private _players$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(
    []
  );

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Ocp-Apim-Subscription-Key': env.fantasyDataApiKey
    })
  };

  getPlayersFromTeam(team: string) {
    const apiParams = {
      responseType: 'JSON',
      selectedTeam: team
    };
    const url = `https://api.fantasydata.net/v3/nba/stats/${
      apiParams.responseType
    }/Players/${apiParams.selectedTeam}`;
    this.http
      .get(url, this.httpOptions)
      .pipe(
        map((response: any) => {
          const players = response.map(this.mapPlayers);
          return players;
        })
      )
      .subscribe((players: Player[]) => {
        this._players$.next(players);
      });
    return this._players$.asObservable();
  }

  private mapPlayers(item: any): Player {
    return new Player({
      id: item.PlayerID,
      name: `${item.FirstName} ${item.LastName}`,
      birthYear: item.BirthDate
        ? item.BirthDate.substring(0, 4)
        : 'Not Available',
      photo: item.PhotoUrl,
      salary: `${item.Salary}$`,
      height: `${(item.Height * 2.54).toFixed()}cm`,
      weight: `${(item.Weight * 0.45359237).toFixed()}kg`,
      experience: item.Experience,
      jerseyNumber: item.Jersey
    });
  }

  private setPlayers(players: Player[]) {
    this._players$.next(players);
  }
}
