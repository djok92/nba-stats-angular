import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './pages/teams/teams.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, TeamsRoutingModule, SharedModule]
})
export class TeamsModule {}
