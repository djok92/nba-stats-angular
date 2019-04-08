import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './pages/players-list/players-list.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayersGuard } from 'src/app/guards/players.guard';

const routes: Routes = [
  { path: '', component: PlayersListComponent },
  { path: ':id', component: PlayerDetailComponent, canActivate: [PlayersGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule {}
