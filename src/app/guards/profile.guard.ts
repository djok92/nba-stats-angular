import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  loggedIn = false;
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.getLoginStatus().subscribe((status: boolean) => {
        this.loggedIn = status;
      });
      if (this.loggedIn) {
        return true;
      } else {
        this.router.navigate(['/404']);
        return false;
      }
  }
}


