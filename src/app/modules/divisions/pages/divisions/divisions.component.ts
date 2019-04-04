import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { TableColumn } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.scss']
})
export class DivisionsComponent implements OnInit {
  constructor(private teamsService: TeamsService) {}

  atlanticDivisionTeams: Team[] = [];
  centralDivisionTeams: Team[] = [];
  southEastDivisionTeams: Team[] = [];
  northWestDivisionTeams: Team[] = [];
  pacificDivisionTeams: Team[] = [];
  southWestDivisionTeams: Team[] = [];

  displayedColumns: TableColumn[] = [
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
    },
    {
      key: 'pointsPerGame',
      title: 'PPG'
    },
    {
      key: 'pointsAllowed',
      title: 'PPG Allowed'
    }
  ];

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.atlanticDivisionTeams = this.sortByDivision(teams, 'Atlantic');
      this.centralDivisionTeams = this.sortByDivision(teams, 'Central');
      this.southEastDivisionTeams = this.sortByDivision(teams, 'Southeast');
      this.northWestDivisionTeams = this.sortByDivision(teams, 'Northwest');
      this.pacificDivisionTeams = this.sortByDivision(teams, 'Pacific');
      this.southWestDivisionTeams = this.sortByDivision(teams, 'Southwest');
    });
  }

  private sortByDivision(arr: Team[], condition: string): Team[] {
    return arr.filter((item: Team) => item.division === condition);
  }
}
