import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() wins: string;
  @Input() losses: string;
  @Input() pointsPerGame: string;
  @Input() reboundsPerGame: string;
  @Input() assistsPerGame: string;
  @Input() stealsPerGame: string;
  @Input() turnoversPerGame: string;
  @Input() threePointersPerGame: string;
  @Input() threePointersPercentage: string;
  @Input() twoPointersPerGame: string;
  @Input() twoPointersPercentage: string;
  @Input() plusMinus: number;

  ngOnInit() {
  }

}
