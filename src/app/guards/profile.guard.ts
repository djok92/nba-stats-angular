import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> {
    const canLoad$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    this.authService.getLoginStatus().subscribe((status: boolean) => {
      canLoad$.next(status);
      canLoad$.complete();

      if (!status) {
        this.router.navigate(['/404-logout']);
      }
    });

    return canLoad$.asObservable();
  }
}


