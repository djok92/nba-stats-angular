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
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  languages: string[] = [];
  currentLang = 'rs';
  registrationError = false;
  users: User[] = [];

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
    private translateService: TranslateService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    // create registration form
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

  /**
   *
   * @param language language to be set
   */
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

  /**
   *
   * @param event uploaded photo
   */
  onFileChange(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.registrationForm.controls.file.setValue(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }

  // actions on registration form submit
  submitRegistration() {
    const inputEmail = this.registrationForm.controls.email.value;
    if (this.registrationForm.valid) {
      this.registrationError = !this.authService.checkUserRegistration(inputEmail, this.users);
      if (!this.registrationError) {
        this.profileService.storeUser(this.registrationForm.value);
      } else {
        this.registrationError = true;
        this.validationService.validateAllFormFields(this.registrationForm);
      }
    } else {
      this.registrationError = true;
      this.validationService.validateAllFormFields(this.registrationForm);
    }
  }
}
