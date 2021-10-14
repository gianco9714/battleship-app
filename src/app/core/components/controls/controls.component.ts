import { Component, Input } from '@angular/core';
import { Game } from '../../model/game';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'app-controls-component',
    templateUrl: './controls.component.html',
    styleUrls: [ './controls.component.scss' ]
})
export class ControlsComponent  {
    @Input() type: string;

    player: Player = this.playerService.player;
    opponent: Player = this.playerService.opponent;
    game: Game = this.playerService.game;

    result = '';
    historyArray = [];

    get NumberOfTurns(): string{
        return localStorage.getItem('numberOfTurns') || '';
      }



    constructor(
        private playerService: PlayerService
    ) {}

    numberOfTurnsExceeds(): boolean {
      return this.game.turnNumber >= parseInt(localStorage.getItem('numberOfTurns'));
    }

    saveData(){
        let history = {
            'totalTurns': this.NumberOfTurns,
            'result' : this.result,
            'date': new Date(),
            'turnedUsed': this.game.turnNumber
        };

        if(!this.player.allShipsAreOnFire() && !this.numberOfTurnsExceeds() && this.opponent.allShipsAreOnFire()){
            history.result = 'Win';
        } else {
            history.result = 'Lose';
        }

        if( JSON.parse(localStorage.getItem('score')) === null){
            this.historyArray.push(history);
            localStorage.setItem('score', JSON.stringify(this.historyArray));
        } else {
            this.historyArray = JSON.parse(localStorage.getItem('score'))
            this.historyArray.push(history);
            localStorage.setItem('score', JSON.stringify(this.historyArray));
        }

    }

}

export class PControlsComponent extends ControlsComponent {}
export class BControlsComponent extends ControlsComponent {}
