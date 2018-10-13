export class RoomsStats {

    constructor(
        public readonly rooms: {[key: string]: number},
        public readonly players: {[key: string]: number},
    ) {}
}
