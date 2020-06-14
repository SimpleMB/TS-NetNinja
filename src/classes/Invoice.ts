import HasFormater from '../interfaces/HasFormater';
// classes

class Invoice implements HasFormater {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    console.log(c, d, a);
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

export default Invoice;
