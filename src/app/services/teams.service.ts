import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../classes/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  private _teams$: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Ocp-Apim-Subscription-Key': env.fantasyDataApiKey
    })
  };

  private mapTeam(item: any): Team {
    return new Team({
      name: item.Name,
      city: item.City,
      conference: item.Conference,
      division: item.Division,
      wins: item.Wins,
      losses: item.Losses,
      homeWins: item.HomeWins,
      homeLosses: item.HomeLosses,
      awayWins: item.AwayWins,
      awayLosses: item.AwayLosses,
      lastTenWins: item.LastTenWins,
      lastTenLosses: item.LastTenLosses,
      pointsPerGame: item.PointsPerGameFor,
      pointsAllowed: item.PointsPerGameAgainst,
      activeStreak: item.StreakDescription,
      percentage: item.Percentage
    });
  }

  getTeams(): Observable<Team[]> {
    const apiParams = {
      responseType: 'JSON',
      season: 2019
    };
    const url = `https://api.fantasydata.net/v3/nba/stats/${
      apiParams.responseType
    }/Standings/${apiParams.season}`;
    this.http
      .get(url, this.httpOptions)
      .pipe(
        map((res: any) => {
          const teams = res.map(this.mapTeam);
          return teams;
        })
      )
      .subscribe((res: Team[]) => {
        this._teams$.next(res);
      });
    return this._teams$.asObservable();
  }
}
