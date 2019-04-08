import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  @Output() emitFormValues = new EventEmitter();

  // Helper functions
  get userNameControl() {
    return this.registrationForm.controls.userName;
  }
  get nameControl() {
    return this.registrationForm.controls.name;
  }

  get lastNameControl() {
    return this.registrationForm.controls.lastName;
  }

  get emailControl() {
    return this.registrationForm.controls.email;
  }

  get passwordControl() {
    return this.registrationForm.controls.password;
  }

  get ageControl() {
    return this.registrationForm.controls.age;
  }

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {
    this.registrationForm = this.formBuilder.group({
      userName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      name: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ],
      age: ['', [Validators.required, Validators.min(10)]],
      file: [null]
    });
  }

  ngOnInit() { }

  private sendFormValues() {
    this.emitFormValues.emit(this.registrationForm.value);
    console.log(this.registrationForm.value);
  }

  onFileChange(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.registrationForm.controls.file.setValue(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }

  checkRegisterUser() {
    if (this.registrationForm.valid) {
      this.sendFormValues();
      this.registrationForm.reset();
    } else {
      this.validationService.validateAllFormFields(this.registrationForm);
    }
  }
}
