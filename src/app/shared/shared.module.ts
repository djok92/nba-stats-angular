import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';
import { TableComponent } from '../components/table/table.component';
import { SelectComponent } from '../components/select/select.component';
import { HeaderLogoutComponent } from '../components/header-logout/header-logout.component';
@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    SelectComponent,
    HeaderLogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    SelectComponent,
    HeaderLogoutComponent,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule {}
