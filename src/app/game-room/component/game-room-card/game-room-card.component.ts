import { GameRoomDescription } from '../../model/game-room-description';
import { Component, Input } from '../../../../../node_modules/@angular/core';

@Component({
    templateUrl: './game-room-card.component.html',
    styleUrls: ['./game-room-card.component.css']
})
export class GameRoomCardComponent {

    @Input()
    private room: GameRoomDescription;
}
