import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  constructor(private teamsService: TeamsService) {}

  teams: Team[] = [];

  ngOnInit() {
    this.teamsService.getTeams().subscribe((res: Team[]) => {
      this.teams = res.sort((a, b) =>
        a.percentage > b.percentage ? -1 : b.percentage > a.percentage ? 1 : 0
      );
      console.log(this.teams);
    });
  }
}
