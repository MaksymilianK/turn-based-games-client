import { GameSettings } from '../../model/game-settings';
import { Game } from '../../game';

export class DontGetAngrySettings extends GameSettings {

    constructor(public boardSize: number, private maxPlayers: number, private playerTime: number) {
        super(Game.DONT_GET_ANGRY);
    }
}
