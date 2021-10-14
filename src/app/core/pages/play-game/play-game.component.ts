import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { Player } from '../../model/player';
import { Square } from '../../model/square';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent {

  player: Player = this.playerService.player;
  opponent: Player = this.playerService.opponent;
  game: Game = this.playerService.game;
  columns: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private playerService: PlayerService) { }
  public onOpponentFieldClick(square: Square) {
      this.playerService.fire(square);
  }
}
