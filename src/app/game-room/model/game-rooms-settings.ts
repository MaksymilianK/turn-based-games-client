import { RoomPrivacy } from "./room-privacy";
import { ChatPolicy } from "./chat-policy";
import { GameSettings } from "../../game/model/game-settings";

export class GameRoomSettings {

    constructor(
        private areObserversAllowed: boolean,
        private privacy: RoomPrivacy,
        private chatPolicy: ChatPolicy,
        private gameSettings: GameSettings
    ) {}
}
