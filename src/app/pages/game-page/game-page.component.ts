import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/models/enums/game-status.enum';
import { GameService } from 'src/app/services/game.service';
import { map } from "rxjs/operators";
import { combineLatestWith } from "rxjs";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  get player$() {
    return this.gameService.player$;
  }

  get isDraw$() {
    return this.gameService.status$.pipe(
      map(status => status === GameStatus.DRAW ? true : false)
    );
  }

  get isShow$() {
    return this.gameService.status$.pipe(
      map(status => (status !== GameStatus.IN_PROGRESS && status !== GameStatus.NOT_STARTED))
    );
  }

  constructor(private gameService: GameService) { }

  ngOnInit() { }
}
