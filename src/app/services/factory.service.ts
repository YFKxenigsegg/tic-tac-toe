import { Injectable } from '@angular/core';
import { Player } from './player.interface';
import { PlayerType } from '../models/enums/player-type.enum';
import { AppInjector } from '../app-injector';
import { ComputerService } from './computer.service';
import { OnlineService } from './online.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor() { }

  getOpponent(playerType: string) {
    let player!: Player;
    if (playerType === PlayerType.LOCAL) {
      player = AppInjector.getInjector().get(LocalService);
    } else if (playerType === PlayerType.COMPUTER) {
      player = AppInjector.getInjector().get(ComputerService);
    } else if (playerType === PlayerType.ONLINE) {
      player = AppInjector.getInjector().get(OnlineService);
    }
    return player;
  }
}
