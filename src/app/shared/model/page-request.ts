import { Sort } from './sort';

export class PageRequest {

    constructor(public size: number, public page: number, public sort?: Sort[]) {}
}
