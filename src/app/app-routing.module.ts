import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { ProfileGuard } from './guards/profile.guard';
import { NotFoundLogoutComponent } from './components/not-found-logout/not-found-logout.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'teams', loadChildren: './modules/teams/teams.module#TeamsModule' },
  {
    path: 'players',
    loadChildren: './modules/players/players.module#PlayersModule'
  },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', canLoad: [ProfileGuard] },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: '404', component: NotFoundComponent },
  { path: '404-logout', component: NotFoundLogoutComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
