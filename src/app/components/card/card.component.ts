import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() position: string;
  @Input() gamesPlayed: string;
  @Input() gamesStarted: string;
  @Input() pointsPerGame: string;
  @Input() assistsPerGame: string;
  @Input() reboundsPerGame: string;
  @Input() stealsPerGame: string;
  @Input() blocksPerGame: string;
  @Input() turnoversPerGame: string;
  @Input() fieldGoalsPercentage: string;
  @Input() freeThrowsPercentage: string;
  @Input() threePointersPercentage: string;


  ngOnInit() {
  }

}
