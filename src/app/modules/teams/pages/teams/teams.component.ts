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
  displayedColumns: TableColumn[] = [];

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams.sort((a, b) =>
        a.percentage > b.percentage ? -1 : b.percentage > a.percentage ? 1 : 0
      );
    });
    this.displayedColumns = this.teamsService.getColumns();
  }
}
