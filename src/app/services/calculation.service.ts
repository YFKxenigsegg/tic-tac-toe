import { Injectable } from '@angular/core';
import { GameStatus } from "../models/enums/game-status.enum";
import { Coordinates } from "../models/interfaces/coordinates.interface";

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  evaluate(board: (boolean | null)[][], mark: boolean) {
    const transposed: (boolean | null)[][] = []
    const isFilled = board.flat().every(x => x !== null);
    let mainDiagonal: (boolean | null)[] = [];
    let antiDiagonal: (boolean | null)[] = [];
    for (let i = 0; i < board.length; i++) {
      if (this.isEvery(board[i], mark)) {
        return GameStatus.COMPLETED;
      }
      transposed[i] = [];
      for (let j = 0; j < board.length; j++) {
        transposed[i][j] = board[j][i];
      }
      if (this.isEvery(transposed[i], mark)) {
        return GameStatus.COMPLETED;
      }
      mainDiagonal.push(board[i][i]);
      antiDiagonal.push(board[i][board.length - 1 - i]);
    }
    if (this.isEvery(mainDiagonal, mark) || this.isEvery(antiDiagonal, mark)) {
      return GameStatus.COMPLETED;
    }
    return isFilled ? GameStatus.DRAW : GameStatus.IN_PROGRESS;
  }

  private isEvery(row: (boolean | null)[], mark: boolean) {
    return row.every(x => x === mark);
  }

  async getCoordinatesEmptyRandomly(board: (boolean | null)[][]): Promise<Coordinates> {
    return new Promise(resolve => {
      setTimeout(() => {
        const empties = board
          .flat()
          .map((value, index) => ({ value, index }))
          .filter(x => x.value === null);
        const index = empties[Math.floor(Math.random() * empties.length)].index
        resolve({ i: Math.floor(index / 3), j: index % 3 });
      }, 500);
    });
  }
}
