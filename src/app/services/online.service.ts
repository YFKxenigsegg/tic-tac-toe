import { Injectable } from '@angular/core';
import { Player } from "./player.interface";
import { Coordinates } from "../models/interfaces/coordinates.interface";
import { GameService } from './game.service';

@Injectable({
    providedIn: 'root'
})
export class OnlineService implements Player {
    mark: boolean;

    constructor() { }

    async receive(): Promise<Coordinates> {
        //network call
        return new Promise((resolve) => resolve);
    }
}
