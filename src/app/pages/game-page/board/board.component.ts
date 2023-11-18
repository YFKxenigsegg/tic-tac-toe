import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  get board$() {
    return this.gameService.board$;
  }

  constructor(private localService: LocalService,
    private gameService: GameService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameService.setPlayerType = this.route.snapshot.queryParamMap.get('opponentType')!;
  }

  async onClick(j: number, i: number) {
    this.localService.setCoordinates({ i, j });
  }
}
