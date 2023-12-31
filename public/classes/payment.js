// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    output() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
