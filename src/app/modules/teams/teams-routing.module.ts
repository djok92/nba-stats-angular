import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { CardComponent } from 'src/app/components/card/card.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: ':id', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}
