import { Game } from '../../game/game';
import { RoomPrivacy } from './room-privacy';
import { ChatPolicy } from './chat-policy';

export class GameRoomDescription {

    constructor(
        public readonly id: number,
        public readonly creationTime: number,
        public readonly users: string[],
        public readonly players: number,
        public readonly maxPlayers: number,
        public readonly areObserversAllowed: boolean,
        public readonly game: Game,
        public readonly privacy: RoomPrivacy,
        public readonly chatPolicy: ChatPolicy,
        public readonly isNotStarted: boolean,

    ) {}
}
