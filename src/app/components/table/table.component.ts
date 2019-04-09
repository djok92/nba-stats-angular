import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

export interface TableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  entityRoute: string;

  @Input()
  dataSource: any[] = [];

  @Input()
  displayedColumns: TableColumn[] = [];

  rows: any[] = [];

  ngOnInit() { }
}
