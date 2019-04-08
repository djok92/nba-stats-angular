import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/classes';
import { TableColumn } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  constructor(
    private teamsService: TeamsService,
    private playerService: PlayersService
  ) {}

  teams: Team[] = [];
  players: Player[] = [];
  selectedTeam: any = null;
  displayedColumns: TableColumn[] = [];
  entityRoute = 'players';

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
    this.displayedColumns = this.playerService.getColumns();
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
