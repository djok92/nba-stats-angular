import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/classes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  users: User[] = [];
  languages: string[] = [];
  currentLang = 'rs';
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private translateService: TranslateService,
    private authService: AuthService,
    private profileService: ProfileService
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
    this.profileService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }


  submitLogin() {
    if (this.loginForm.valid) {
      this.loginError = !this.authService.checkUserLogin(this.loginForm.controls, this.users);
      if (!this.loginError) {
        const loggedUser = this.users.find((user: User) => user.email === this.loginForm.controls.email.value);
        this.profileService.setUser(loggedUser);
      } else {
        this.validationService.validateAllFormFields(this.loginForm);
      }
    } else {
      this.validationService.validateAllFormFields(this.loginForm);
    }
  }
}
