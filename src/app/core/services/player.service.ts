import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Game } from '../model/game';
import { Player } from '../model/player';
import { Square } from '../model/square';
import { filter } from 'rxjs/operators';

@Injectable()
export class PlayerService {
  public player: Player = new Player();
  public opponent: Player = new Player();
  public game: Game;

  result: string;



  get NumberOfTurns(): string{
    return localStorage.getItem('numberOfTurns') || '';
  }

  constructor(router: Router) {
    router.events.pipe(
        filter(event => event instanceof NavigationStart)
    ).subscribe(( event: NavigationStart) => {
        if (event.url === '/battle') {
            this.opponent.randomSet();
            this.game = new Game();
          }
          if (event.url === '/play-game') {
            this.player.clearBatte();
          }
    });
  }
  private opponentAI() {
    const targets: Array<Square> = [];
    const firedTargets: Array<Square> = [];
    let finalTarget: Square;

    this.player.field.map((row: Array<Square>) => row.map((square: Square) => {
        if (square.isFired && square.isShip) {
            square.allNeighbors.map((neighbor: Square) => {
                if (!neighbor.isFired) {
                    firedTargets.push(neighbor);
                }
            });
        }
        if (!square.isFired) {
            targets.push(square);
        }
    }));

    if (firedTargets.length) {
        finalTarget = firedTargets[Math.floor(Math.random() * firedTargets.length)];
    } else {
        finalTarget = targets[Math.floor(Math.random() * targets.length)];
    }

    return finalTarget;
  }
  public fire (square: Square) {
      if (!this.game.isHumanTurn || square.isFired || this.opponent.allShipsAreOnFire() || this.player.allShipsAreOnFire() || parseInt(this.NumberOfTurns) <= this.game.turnNumber) {
       return;
      }

      this.game.turnNumber++;
      this.opponent.getFired(square);

     

      if (this.opponent.allShipsAreOnFire()) {
          return;
      }

      this.game.isHumanTurn = false;

      const self = this;
      setTimeout(() => {
          self.player.getFired(this.opponentAI());
          self.game.isHumanTurn = true;
      }, 150);
  }
}
