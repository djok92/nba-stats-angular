import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionsRoutingModule } from './divisions-routing.module';
import { DivisionsComponent } from './pages/divisions/divisions.component';

@NgModule({
  declarations: [DivisionsComponent],
  imports: [CommonModule, DivisionsRoutingModule]
})
export class DivisionsModule {}
