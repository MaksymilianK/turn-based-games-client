import { RoomPrivacy } from './room-privacy';
import { ChatPolicy } from './chat-policy';
import { GameResponse } from '../../game/model/game-response';

export class GameRoomDetails {

    constructor(
        public readonly id: number,
	    public readonly creationTime: number,
	    public readonly users: string[],
	    public readonly areObserversAllowed: boolean,
	    public readonly privacy: RoomPrivacy,
	    public readonly chatPolicy: ChatPolicy,
	    public readonly gameDto: GameResponse,
	    public readonly now: number
    ) {}
}
