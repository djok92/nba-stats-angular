import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ' ', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  {
    path: 'conferences',
    loadChildren: './modules/conferences/conferences.module#ConferencesModule'
  },
  {
    path: 'divisions',
    loadChildren: './modules/divisions/divisions.module#DivisionsModule'
  },
  {
    path: 'players',
    loadChildren: './modules/players/players.module#PlayersModule'
  },
  { path: 'teams', loadChildren: './modules/teams/teams.module#TeamsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
