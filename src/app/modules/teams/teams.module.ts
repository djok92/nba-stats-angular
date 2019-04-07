import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './pages/teams/teams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { ConferencesComponent } from './pages/conferences/conferences.component';
import { TeamDetailComponent } from './pages/team-detail/team-detail.component';
import { CardTeamComponent } from './components/card-team/card-team.component';

@NgModule({
  declarations: [TeamsComponent, DivisionsComponent, ConferencesComponent, TeamDetailComponent, CardTeamComponent],
  imports: [CommonModule, TeamsRoutingModule, SharedModule]
})
export class TeamsModule {}
