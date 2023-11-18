import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { map } from "rxjs/operators";
import { combineLatest } from "rxjs";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent {

  get crossScore$() {
    return this.gameService.crossScore$;
  }

  get totalScore$() {
    return combineLatest([this.crossScore$, this.noughScore$, this.gameService.drawScore$]).pipe(
      map(([cross, nough, draw]) => cross + nough + draw)
    );
  }

  get noughScore$() {
    return this.gameService.noughScore$;
  }

  constructor(private gameService: GameService) { }
}
