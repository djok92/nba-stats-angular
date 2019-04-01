import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionsComponent } from './pages/divisions/divisions.component';

const routes: Routes = [{ path: '', component: DivisionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionsRoutingModule {}
