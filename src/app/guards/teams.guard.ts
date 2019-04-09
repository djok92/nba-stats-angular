import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { TeamsService } from '../services/teams.service';
import { TeamStats } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class TeamsGuard implements CanActivate {
  constructor(private router: Router, private teamsService: TeamsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const canActivate$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    const id = route.params.id;

    this.teamsService.getTeamStats(id).subscribe((team: TeamStats) => {
      if (team !== undefined) {
        canActivate$.next(true);
      } else {
        this.router.navigate(['/404']);
        canActivate$.next(false);
      }
    });

    return canActivate$.asObservable();
  }
}
