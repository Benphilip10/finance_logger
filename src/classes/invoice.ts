import {hasFormatter} from '../interfaces/hasFormatter.js';

// classes
export class Invoice implements hasFormatter {
    constructor(
        readonly client:string,
        private details: string,
        public amount:number,
    ) {}    

output() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
} }
