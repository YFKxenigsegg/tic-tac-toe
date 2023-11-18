import { Injectable } from '@angular/core';
import { FactoryService } from "./factory.service";
import { BehaviorSubject } from "rxjs";
import { CalculationService } from './calculation.service';
import { GameStatus } from "../models/enums/game-status.enum";
import { Player } from './player.interface';
import { PlayerType } from "../models/enums/player-type.enum";
import { Coordinates } from "../models/interfaces/coordinates.interface";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private boardSrc = new BehaviorSubject<(boolean | null)[][]>(this.initBoard());
  private crossScoreSrc = new BehaviorSubject<number>(0);
  private noughScoreSrc = new BehaviorSubject<number>(0);
  private drawScoreSrc = new BehaviorSubject<number>(0);
  private statusSrc = new BehaviorSubject<GameStatus>(GameStatus.NOT_STARTED);
  private playerSrc = new BehaviorSubject<Player>(this.factoryService.getOpponent(PlayerType.LOCAL));
  private playerBuffer: Player;
  private playerType: string;
  board$ = this.boardSrc.asObservable();
  crossScore$ = this.crossScoreSrc.asObservable();
  noughScore$ = this.noughScoreSrc.asObservable();
  drawScore$ = this.drawScoreSrc.asObservable();
  status$ = this.statusSrc.asObservable();
  player$ = this.playerSrc.asObservable();

  set setPlayerType(playerType: string) {
    this.playerType = playerType;
  }

  get getBoard() {
    return this.boardSrc.getValue();
  }

  constructor(private calculationService: CalculationService, private factoryService: FactoryService) { }

  async move() {
    while (this.statusSrc.getValue() === GameStatus.IN_PROGRESS) {
      const player = this.playerSrc.getValue();
      const coordinates = await player.receive();
      this.updateBoard(coordinates);
      const status = this.calculationService.evaluate(this.boardSrc.getValue(), player.mark);
      if (status === GameStatus.IN_PROGRESS) {
        this.toggle();
      } else {
        this.complete(status);
        break;
      }
    }
  }

  async start(playerType: string) {
    this.playerType = playerType;
    if (this.statusSrc.getValue() === GameStatus.NOT_STARTED) {
      this.statusSrc.next(GameStatus.IN_PROGRESS);
      await this.move();
    }
  }

  reset() {
    this.boardSrc.next(this.initBoard());
    this.statusSrc.next(GameStatus.NOT_STARTED);
    this.playerSrc.next(this.factoryService.getOpponent(PlayerType.LOCAL));
    this.start(this.playerType);
  }

  private updateBoard(coordinates: Coordinates) {
    const { i, j } = coordinates;
    if (!this.isEmpty(i, j)) return;
    const board = this.boardSrc.getValue();
    board[i][j] = this.playerSrc.getValue().mark;
    this.boardSrc.next(board);
  }

  private isEmpty(i: number, j: number) {
    return this.boardSrc.getValue()[i][j] === null;
  }

  private toggle() {
    let player = this.playerBuffer ??= this.factoryService.getOpponent(this.playerType); // ask in case "LOCAL" return singleton
    player.mark = !this.playerSrc.getValue().mark;
    this.playerBuffer = this.playerSrc.getValue();
    this.playerSrc.next(player);
  }

  private complete(status: GameStatus) {
    this.statusSrc.next(status);
    let count: number;
    if (status === GameStatus.DRAW) {
      count = this.drawScoreSrc.getValue();
      this.drawScoreSrc.next(++count);
      return;
    }
    const mark = this.playerSrc.getValue().mark;
    count = mark ? this.crossScoreSrc.getValue() : this.noughScoreSrc.getValue();
    mark ? this.crossScoreSrc.next(++count) : this.noughScoreSrc.next(++count);
  }

  private initBoard() {
    const board: (boolean | null)[][] = [];
    for (let i = 0; i < 3; i++) {
      board[i] = [null, null, null];
    }
    return board;
  }
}