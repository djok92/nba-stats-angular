import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectForm: FormGroup;
  private team: FormControl;

  @Input()
  teams: Team[] = [];
  @Output()
  emitSelectValue = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.team = new FormControl();
    this.selectForm = this.formBuilder.group({
      team: this.team
    });
  }

  ngOnInit() {}

  sendSelectValues() {
    // emit select value
    this.emitSelectValue.emit(this.selectForm.value);
  }
}
