import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesRoutingModule } from './conferences-routing.module';
import { ConferencesComponent } from './pages/conferences/conferences.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ConferencesComponent],
  imports: [CommonModule, ConferencesRoutingModule, SharedModule]
})
export class ConferencesModule {}
