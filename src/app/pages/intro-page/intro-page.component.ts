import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent {

  constructor(private router: Router, private gameService: GameService) { }

  onClick(palyerType: string) {
    this.router.navigate(
      ['/game'],
      { queryParams: { opponentType: `${palyerType}` } }
    );
    this.gameService.setPlayerType = palyerType
    this.gameService.start(palyerType);
  }
}
