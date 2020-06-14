import HasFormater from '../interfaces/HasFormater';

export default class Payment implements HasFormater {
  constructor(
    readonly recipient: string,
    private description: string,
    public amount: number
  ) {}

  format(): string {
    const text = `${this.recipient} owed $${this.amount} for ${this.description}`;
    console.log(text);
    return text;
  }
}
