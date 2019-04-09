import { Injectable } from '@angular/core';
import { User } from '../classes';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  /**
   *
   * @param data data from form passed into function for checking if user exists
   * @returns returns user if found in local storage, and null if it's not found
   */
  checkUser(data: any): Observable<User> | Observable<null> {
    const loggedUser$: ReplaySubject<User> = new ReplaySubject<User>(1);
    const users = JSON.parse(localStorage.getItem('USERS'));
    const user = users.find((userStorage: User) => userStorage.email === data.email);
    if (user !== undefined) {
      loggedUser$.next(user);
      this._loggedIn$.next(true);
    } else {
      loggedUser$.next(null);
      this._loggedIn$.next(false);
    }
    return loggedUser$.asObservable();
  }

  /**
   * @returns returns if _loggedIn$ property is true or false
   */
  getLoginStatus(): Observable<boolean> {
    return this._loggedIn$.asObservable();
  }

  /**
   *
   * @param input data from registration form
   * @param users array of registered users
   */
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
