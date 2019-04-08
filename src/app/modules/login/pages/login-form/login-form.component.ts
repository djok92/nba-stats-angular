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
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  languages: string[] = [];
  currentLang = 'rs';

  @Output() emitFormValues = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private translateService: TranslateService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ]
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
    this.emitFormValues.emit(this.loginForm.value);
  }

  checkLoginUser() {
    if (this.loginForm.valid) {
      this.sendFormValues();
    } else {
      this.validationService.validateAllFormFields(this.loginForm);
    }
  }
}
