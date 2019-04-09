import { Injectable } from '@angular/core';
import { User } from '../classes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  checkUserLogin(input, users): boolean {
    const userEmail = users.find((user: User) => user.email === input.email.value);
    const userPassword = users.find(
      (user: User) => user.password === input.password.value
    );
    if (userEmail && userPassword) {
      this._loggedIn$.next(true);
      return true;
    } else {
      this._loggedIn$.next(false);
      return false;
    }
  }

  getLoginStatus(): Observable<boolean> {
    console.log(this._loggedIn$.value);
    return this._loggedIn$.asObservable();
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
