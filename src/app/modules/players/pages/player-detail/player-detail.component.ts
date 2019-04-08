import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { Player, PlayerStats } from 'src/app/classes';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  playerData: any;

  constructor(
    private route: ActivatedRoute,
    private playersSerivce: PlayersService
  ) { }

  ngOnInit() {
    this.showPlayer();
  }

  showPlayer() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.playersSerivce
        .getPlayerStats(id)
        .subscribe((playerData: PlayerStats) => {
          this.playerData = playerData;
        });
    });
  }
}
