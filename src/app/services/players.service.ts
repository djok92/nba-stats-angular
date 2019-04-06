import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Team, Player } from '../classes';
import { pipe, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableColumn } from '../components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  private _players$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(
    []
  );
  private _player$: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Ocp-Apim-Subscription-Key': env.fantasyDataApiKey
    })
  };

  tableColumns: TableColumn[] = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'birthYear',
      title: 'Birth Year'
    },
    {
      key: 'salary',
      title: 'Salary'
    },
    {
      key: 'height',
      title: 'Height'
    },
    {
      key: 'weight',
      title: 'Weight'
    },
    {
      key: 'experience',
      title: 'Experience'
    },
    {
      key: 'jerseyNumber',
      title: 'Number'
    }
  ];

  getPlayersFromTeam(team: string): Observable<Player[]> {
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
          console.log(response);
          const players = response.map(this.mapPlayers);
          return players;
        })
      )
      .subscribe((players: Player[]) => {
        this._players$.next(players);
      });
    return this._players$.asObservable();
  }

  getPlayerFromTeam(id): Observable<Player> {
    const apiParams = {
      responseType: 'JSON',
      selectedPlayer: id,
      season: 2019
    };

    const url = `https://api.fantasydata.net/v3/nba/stats/${apiParams.responseType}/PlayerSeasonStatsByPlayer/${apiParams.season}/${apiParams.selectedPlayer}`
    this.http
      .get(url, this.httpOptions)
      .pipe(
        map((response: any) => {
          return new Player({
            stats: response
          })
        })
      ).subscribe((player: any) => {
        this._player$.next(player);
      });
    return this._player$.asObservable();
  }

  getColumns(): TableColumn[] {
    return this.tableColumns;
  }

  private mapPlayers(item: any): Player {
    return new Player({
      id: item.PlayerID,
      name: `${item.FirstName} ${item.LastName}`,
      birthYear: item.BirthDate
        ? item.BirthDate.substring(0, 4)
        : 'Not Available',
      photo: item.PhotoUrl,
      salary: item.Salary !== null ? `${item.Salary} $` : `100 000 $`,
      height: `${(item.Height * 2.54).toFixed()} cm`,
      weight: `${(item.Weight * 0.45359237).toFixed()} kg`,
      experience: item.Experience > 0 ? `${item.Experience}` : `Rookie`,
      jerseyNumber: item.Jersey > 0 ? item.Jersey : `0`
    });
  }
  private setPlayers(players: Player[]) {
    this._players$.next(players);
  }
}
