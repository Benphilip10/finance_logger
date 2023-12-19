import {hasFormatter} from '../interfaces/hasFormatter.js';

// classes
export class Payment implements hasFormatter {
    constructor(
        readonly recipient:string,
        private details: string,
        public amount:number,
    ) {}    

output() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
} }
