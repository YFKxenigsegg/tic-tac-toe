import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-functional-panel',
  templateUrl: './functional-panel.component.html',
  styleUrls: ['./functional-panel.component.css']
})
export class FunctionalPanelComponent {

  constructor(private gameService: GameService) { }

  onReset() {
    this.gameService.reset();
  }
}
