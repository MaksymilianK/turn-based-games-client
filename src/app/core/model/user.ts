import { Role } from './role';

export class User {

    constructor(
        public readonly id: number,
        public readonly nick: string,
        public readonly role: Role
    ) {}
}
