import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/classes/team';
import { TableColumn } from 'src/app/components/table/table.component';
import { Conference } from 'src/app/enums';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  easternConferenceTeams: Team[] = [];
  westernConferenceTeams: Team[] = [];
  displayedColumns: TableColumn[] = [];
  entityRoute: string = 'teams';

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.easternConferenceTeams = this.sortByConference(
        teams,
        Conference.Eastern
      );
      this.westernConferenceTeams = this.sortByConference(
        teams,
        Conference.Western
      );
    });
    this.displayedColumns = this.teamsService.getTableColumns();
  } 

  private sortByConference(arr: Team[], condition: string): Team[] {
    return arr.filter((item: Team) => item.conference === condition);
  }
}
