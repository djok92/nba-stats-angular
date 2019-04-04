import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { TableColumn } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  easternConferenceTeams: Team[] = [];
  westernConferenceTeams: Team[] = [];
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

  constructor(private teamsService: TeamsService) {}

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.easternConferenceTeams = this.sortByConference(teams, 'Eastern');
      this.westernConferenceTeams = this.sortByConference(teams, 'Western');
    });
  }

  private sortByConference(arr: Team[], condition: string): Team[] {
    return arr.filter((item: Team) => item.conference === condition);
  }
}
