import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionsRoutingModule } from './divisions-routing.module';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DivisionsComponent],
  imports: [CommonModule, DivisionsRoutingModule, SharedModule]
})
export class DivisionsModule {}
