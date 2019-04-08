import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../classes/team';
import { TableColumn } from '../components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  private _teams$: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);

  tableColumns: TableColumn[] = [
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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Ocp-Apim-Subscription-Key': env.fantasyDataApiKey
    })
  };

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
          const teams = response
            .map(this.mapTeam)
            .sort((a, b) => b.wins - a.wins);
          return teams;
        })
      )
      .subscribe((teams: Team[]) => {
        this._teams$.next(teams);
      });
    return this._teams$.asObservable();
  }

  getTeam(id): Observable<Team> {
    const team$: ReplaySubject<Team> = new ReplaySubject<Team>(1);

    const apiParams = {
      responseType: 'JSON',
      selectedTeam: id,
      season: 2019
    };
    const url = `https://api.fantasydata.net/v3/nba/stats/${
      apiParams.responseType
    }/TeamSeasonStats/${apiParams.season}`;
    this.http
      .get(url, this.httpOptions)
      .pipe(
        map((response: any) => {
          const team = response
            .map(this.mapTeamStats)
            .find((item: any) => item.id === id);
          return team;
        })
      )
      .subscribe(
        (team: Team) => {
          team$.next(team);
        },
        error => {
          team$.next(null);
        }
      );
    return team$.asObservable();
  }

  getTableColumns(): TableColumn[] {
    return this.tableColumns;
  }

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
      id: item.Team,
      name: item.Name,
      wins: item.Wins,
      losses: item.Losses,
      stats: {
        pointsPerGame: (item.Points / item.Games).toFixed(1),
        reboundsPerGame: (item.Rebounds / item.Games).toFixed(1),
        assistsPerGame: (item.Assists / item.Games).toFixed(1),
        stealsPerGame: (item.Steals / item.Games).toFixed(1),
        turnoversPerGame: (item.Turnovers / item.Games).toFixed(1),
        threePointersPerGame: (item.ThreePointersMade / item.Games).toFixed(1),
        threePointersPercentage: item.ThreePointersPercentage + ' %',
        twoPointersPerGame: (item.TwoPointersMade / item.Games).toFixed(1),
        twoPointersPercentage: item.TwoPointersPercentage + ' %',
        plusMinus: item.PlusMinus
      }
    });
  }
}
