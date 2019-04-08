import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { Player } from '../classes';
import { PlayersService } from '../services/players.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersGuard implements CanActivate {
  constructor(private router: Router, private playersService: PlayersService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const canActivate$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    const id = route.params.id;

    this.playersService.getPlayerFromTeam(id).subscribe((player: Player) => {
      if (player !== null) {
        canActivate$.next(true);
      } else {
        canActivate$.next(false);
        this.router.navigate(['/404']);
      }
    });

    return canActivate$.asObservable();
  }
}
