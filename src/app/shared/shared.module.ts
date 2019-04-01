import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [HeaderComponent, SearchFormComponent, TableComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, TableComponent, RouterModule]
})
export class SharedModule {}
