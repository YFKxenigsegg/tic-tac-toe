import { Injectable } from '@angular/core';
import { Player } from "./player.interface";
import { CalculationService } from './calculation.service';
import { GameService } from './game.service';
import { Coordinates } from "../models/interfaces/coordinates.interface";

@Injectable({
  providedIn: 'root'
})
export class ComputerService implements Player {
  mark: boolean;

  constructor(private calculationService: CalculationService, private gameService: GameService) { }

  async receive(): Promise<Coordinates> {
    return new Promise(async (resolve) =>
      resolve(await this.calculationService.getCoordinatesEmptyRandomly(this.gameService.getBoard))
    );
  }
}
