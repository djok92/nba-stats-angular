import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/classes';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  constructor(
    private teamsService: TeamsService,
    private playerService: PlayersService
  ) {}

  teams: Team[] = [];
  players: Player[] = [];
  selectedTeam: any = null;

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
  }

  getSelectValue(event) {
    this.selectedTeam = event.team;
    this.playerService
      .getPlayersFromTeam(this.selectedTeam)
      .subscribe((players: Player[]) => {
        this.players = players;
      });
  }
}
