import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { TableColumn } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  constructor(private teamsService: TeamsService) {}

  teams: Team[] = [];
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
      this.teams = teams.sort((a, b) =>
        a.percentage > b.percentage ? -1 : b.percentage > a.percentage ? 1 : 0
      );
    });
  }
}
