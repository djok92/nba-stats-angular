import { Injectable } from '@angular/core';
import { User } from '../classes';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _loggedUser$: ReplaySubject<User> = new ReplaySubject<User>(1);

  constructor() { }

  private mapUser(data: any): User {
    return new User({
      userName: data.userName,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      image: data.file,
      age: data.age
    });
  }

  storeUser(user) {
    const newUser = this.mapUser(user);
    if (this._users$.value === null) {
      this._users$.next([newUser]);
    } else {
      this._users$.next([...this._users$.value, newUser]);
    }
    localStorage.setItem('USERS', JSON.stringify(this._users$.value));
  }

  getUsers(): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem('USERS'));
    this._users$.next(users);
    return this._users$.asObservable();
  }

  setUser(user) {
    this._loggedUser$.next(user);
  }

  getUser(): Observable<User> {
    return this._loggedUser$.asObservable();
  }

}
