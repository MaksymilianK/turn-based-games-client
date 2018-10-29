import { Invitation } from './invitation';
import { RoomPrivacy } from './room-privacy';
import { ChatPolicy } from './chat-policy';
import { GameEngine } from '../../game/model/game-engine';

export class GameRoom {

    constructor(
        id: number,
        creationTime: Date,
        invitations: Invitation[],
        areObserversAllowed: boolean,
        privacy: RoomPrivacy,
        chatPolicy: ChatPolicy,
        gameEngine: GameEngine
    ) {}
}
