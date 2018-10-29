import { SortDirection } from './sort-direction';

export class Sort {

    constructor(public readonly by: string, public readonly direction: SortDirection) {}
}
