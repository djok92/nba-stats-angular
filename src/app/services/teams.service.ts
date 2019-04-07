import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../classes/team';
import { TableColumn } from '../components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  private _teams$: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  private _team$: BehaviorSubject<Team> = new BehaviorSubject<Team>(null);

  TableColumns: TableColumn[] = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'wins',
      title: 'Wins'
    },
    {
      key: 'losses',
      title: 'Losses'
    },
    {
      key: 'percentage',
      title: 'Percentage'
    },
    {
      key: 'home',
      title: 'Home'
    },
    {
      key: 'away',
      title: 'Away'
    },
    {
      key: 'lastTen',
      title: 'Last Ten'
    },
    {
      key: 'activeStreak',
      title: 'Active Streak'
    }
  ];

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
        map((response: any) => {
          const teams = response.map(this.mapTeam)
                                .sort((a , b) => b.wins - a.wins );
          return teams;
        })
      )
      .subscribe((teams: Team[]) => {
        this._teams$.next(teams);
      });
    return this._teams$.asObservable();
  }

  getTeam(id): Observable<Team> {
    console.log("executed service 1")
    const apiParams = {
      responseType: 'JSON',
      selectedTeam: id,
      season: 2019
    };
    const url = `https://api.fantasydata.net/v3/nba/stats/${apiParams.responseType}/TeamSeasonStats/${apiParams.season}`;
    this.http.get(url, this.httpOptions)
      .pipe(
        map((response: any) => {
          console.log("executed service 2")
          const team = response.filter((item: any) => item.Team === id).map(this.mapTeamStats);
          console.log("executed service 3")
          return team
        })
      )
      .subscribe((team: Team) => {
        this._team$.next(team);
      })
    return this._team$.asObservable();
  }

  getTableColumns(): TableColumn[] {
    return this.TableColumns;
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Ocp-Apim-Subscription-Key': env.fantasyDataApiKey
    })
  };

  private mapTeam(item: any): Team {
    return new Team({
      id: item.Key,
      name: item.Name,
      city: item.City,
      conference: item.Conference,
      division: item.Division,
      wins: item.Wins,
      losses: item.Losses,
      homeWins: item.HomeWins,
      homeLosses: item.HomeLosses,
      home: `${item.HomeWins} - ${item.HomeLosses}`,
      awayWins: item.AwayWins,
      awayLosses: item.AwayLosses,
      away: `${item.AwayWins} - ${item.AwayLosses}`,
      lastTenWins: item.LastTenWins,
      lastTenLosses: item.LastTenLosses,
      lastTen: `${item.LastTenWins} - ${item.LastTenLosses}`,
      activeStreak: item.StreakDescription,
      percentage: item.Percentage,
      abbreviation: item.Key
    });
  }

  private mapTeamStats(item: any): Team {
    return new Team({
      name: item.Name,
      wins: item.Wins,
      losses: item.Losses,
      pointsPerGame: (item.Points / item.Games).toFixed(1),
      stats: {
        reboundsPerGame: (item.Rebounds / item.Games).toFixed(1),
        assistsPerGame: (item.Assists / item.Games).toFixed(1),
        stealsPerGame: (item.Steals / item.Games).toFixed(1),
        turnoversPerGame: (item.Turnovers / item.Games).toFixed(1),
        threePointersPerGame: (item.ThreePointersMade / item.Games).toFixed(1),
        threePointersPercentage: item.ThreePointersPercentage + " %",
        twoPointersPerGame: (item.TwoPointersMade / item.Games).toFixed(1),
        twoPointersPercentage: item.TwoPointersPercentage + " %",
        plusMinus: item.PlusMinus
      }
    })
  }

}
