import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  languages: string[] = [];
  currentLang = 'rs';

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
    private validationService: ValidationService,
    private translateService: TranslateService
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

  languageSelectionChange(language: any) {
    this.translateService.use(language.target.value);
  }

  ngOnInit() {
    this.languages = this.translateService.langs;
    this.currentLang = this.translateService.getDefaultLang();
  }

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
