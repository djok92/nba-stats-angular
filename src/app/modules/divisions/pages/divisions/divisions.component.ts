import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { TableColumn } from 'src/app/components/table/table.component';
import { Division } from 'src/app/enums';

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

  displayedColumns: TableColumn[] = [];

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.atlanticDivisionTeams = this.sortByDivision(
        teams,
        Division.Atlantic
      );
      this.centralDivisionTeams = this.sortByDivision(teams, Division.Central);
      this.southEastDivisionTeams = this.sortByDivision(
        teams,
        Division.Southeast
      );
      this.northWestDivisionTeams = this.sortByDivision(
        teams,
        Division.Northwest
      );
      this.pacificDivisionTeams = this.sortByDivision(teams, Division.Pacific);
      this.southWestDivisionTeams = this.sortByDivision(
        teams,
        Division.Southwest
      );
    });
    this.displayedColumns = this.teamsService.getColumns();
  }

  /**
   * @returns Team[] Return the teams array sorted by the division
   */
  private sortByDivision(teams: Team[], division: string): Team[] {
    return teams.filter((item: Team) => item.division === division);
  }
}
