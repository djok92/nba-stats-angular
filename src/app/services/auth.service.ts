import { Injectable } from '@angular/core';
import { User } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUserLogin(input, users): boolean {
    const userEmail = users.find((user: User) => user.email === input.email.value);
    const userPassword = users.find(
      (user: User) => user.password === input.password.value
    );
    if (userEmail && userPassword) {
      return true;
    } else {
      return false;
    }
  }

  checkUserRegistration(input, users): boolean {
    if (users !== null) {
      const userEmail = users.find((user: User) => user.email === input.email);
      if (!userEmail) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

}
