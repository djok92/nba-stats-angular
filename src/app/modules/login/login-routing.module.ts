import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
