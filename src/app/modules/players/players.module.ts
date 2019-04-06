import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayersListComponent } from './pages/players-list/players-list.component';

@NgModule({
  declarations: [PlayerDetailComponent, PlayersListComponent],
  imports: [CommonModule, PlayersRoutingModule, SharedModule]
})
export class PlayersModule {}
