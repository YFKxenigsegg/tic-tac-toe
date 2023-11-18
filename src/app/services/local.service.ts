import { Injectable } from '@angular/core';
import { Player } from "./player.interface";
import { Coordinates } from "../models/interfaces/coordinates.interface";

@Injectable()
export class LocalService implements Player {
  mark: boolean;
  coordinates: Coordinates;
  resolveMove?: (coordinates: Coordinates) => void;

  constructor() { }

  async receive(): Promise<Coordinates> {
    return new Promise((resolve) => {
      this.resolveMove = resolve;
    });
  }

  setCoordinates(coordinates: Coordinates) {
    this.coordinates = coordinates;
    this.resolveMove?.(coordinates);
    delete this.resolveMove;
  }
}
