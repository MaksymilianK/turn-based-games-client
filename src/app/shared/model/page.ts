import { SortDirection } from "./sort-direction";

export class Page<T> {

    constructor(
        public readonly content: T[],
	    public readonly sort: {[key: string]: SortDirection},
	    public readonly size: number,
	    public readonly page: number,
	    public readonly totalElements: number
    ) {}
}
