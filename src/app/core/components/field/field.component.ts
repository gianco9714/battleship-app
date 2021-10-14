import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Square } from '../../model/square';
import { DragndropService } from '../../services/dragndrop.service';
import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'app-field-component',
    templateUrl: './field.component.html',
    styleUrls: [ './field.component.scss' ]
})
export class FieldComponent  {
    @Input() field: Array<Array<Square>>;
    @Input() showShips: boolean;
    @Input() showFieldBorder: boolean;
    @Input() canFire: boolean;
    @Input() isBattleMode: boolean;
    @Output() rotateShip = new EventEmitter<Square>();

    columns: number[] = [];
    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    dragndrop: any = this.dragndropService;

    constructor(private playerService: PlayerService, private dragndropService: DragndropService) {
    
        for ( let i=1; i<=10; i++){
            this.columns.push(i);
        }
    }
    public onOpponentFieldClick(square: Square) {
        if (!this.canFire) {
            return;
        }
        this.playerService.fire(square);
    }
    public onContextMenuOnFieldShip(event: Event, square: Square) {
        event.preventDefault();
        if (this.isBattleMode) {
            return;
        }
        this.rotateShip.emit(square);
    }
}

export class PFieldComponent extends FieldComponent {}
export class BFieldComponent extends FieldComponent {}
