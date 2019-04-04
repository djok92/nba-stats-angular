import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

import { HeaderComponent } from '../components/header/header.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { TableComponent } from '../components/table/table.component';
@NgModule({
  declarations: [HeaderComponent, SearchFormComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TableComponent
  ]
})
export class SharedModule {}
