import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  teamData: any;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.showTeam();
  }

  showTeam() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.teamsService.getTeam(id).subscribe((team: Team) => {
        this.teamData = team;
      });
    });
  }
}
