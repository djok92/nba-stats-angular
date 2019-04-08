import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { ConferencesComponent } from './pages/conferences/conferences.component';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { TeamDetailComponent } from './pages/team-detail/team-detail.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'divisions', component: DivisionsComponent },
  { path: ':id', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}
