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
import { Router } from '@angular/router';

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
    private profileService: ProfileService,
    private router: Router
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
      this.authService.checkUser(this.loginForm.value).subscribe((response: User | null) => {
        if (response !== null) {
          this.profileService.setUser(response);
          this.router.navigate(['/profile']);
        }
      });

    } else {
      this.validationService.validateAllFormFields(this.loginForm);
    }
  }
}
