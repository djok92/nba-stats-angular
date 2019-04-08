import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [UserPanelComponent, ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
