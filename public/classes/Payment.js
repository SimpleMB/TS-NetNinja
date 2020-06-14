export default class Payment {
    constructor(recipient, description, amount) {
        this.recipient = recipient;
        this.description = description;
        this.amount = amount;
    }
    format() {
        const text = `${this.recipient} owed ${this.amount} for ${this.description}`;
        console.log(text);
        return text;
    }
}
