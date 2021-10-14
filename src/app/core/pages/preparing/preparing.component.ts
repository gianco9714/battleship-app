import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { Square } from '../../model/square';
import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'app-preparing-component',
    templateUrl: './preparing.component.html',
    styleUrls: [ './preparing.component.scss' ]
})
export class PreparingComponent  {

    player: Player = this.playerService.player;
    columns: number[] = [1,2,3,4,5,6,7,8,9,10];

    constructor(
        private playerService: PlayerService
    ) { }

    public preventDefault(event: Event) {
        event.preventDefault();
        return false;
    }
    public rotateShipOnF(square: Square) {
        this.player.rotateShipOnField(square, undefined);
    }
}
