import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ' ', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'teams', loadChildren: './modules/teams/teams.module#TeamsModule' },
  {
    path: 'players',
    loadChildren: './modules/players/players.module#PlayersModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
