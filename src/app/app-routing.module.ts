import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'teams', loadChildren: './modules/teams/teams.module#TeamsModule' },
  {
    path: 'players',
    loadChildren: './modules/players/players.module#PlayersModule'
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
