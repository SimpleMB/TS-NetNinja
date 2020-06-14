import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
import ListTemplate from './classes/ListTemplate.js'
import IsPerson from './interfaces/IsPerson';
import HasFormater from './interfaces/HasFormater.js';

// let docOne: HasFormater;
// let docTwo: HasFormater;

// docOne = new Invoice('Bartek', 'for website', 400);
// docTwo = new Payment('Ania', 'graphic design', 200);

// const docs: HasFormater[] = [];
// docs.push(docOne)
// docs.push(docTwo)

// const invOne = new Invoice('bartek', 'website banner', 400);

// let invoices: Invoice[] = [];
// let payments: Payment[] = [];

// form
const formEl = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const typeEl = formEl.querySelector('#type') as HTMLSelectElement;
const toFromEl = formEl.querySelector('#tofrom') as HTMLInputElement;
const detailsEl = formEl.querySelector('#details') as HTMLInputElement;
const amountEl = formEl.querySelector('#amount') as HTMLInputElement;

//tuple
const values:[string, string, number] = [toFromEl.value, detailsEl.value, amountEl.valueAsNumber]

const crateInvoice = () => {
  const inv = new Invoice(...values);
  return inv;
};

const createPayment = () => {
  const payment = new Payment(...values);
  return payment;
};

const list = new ListTemplate;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  let doc: HasFormater;
  if (typeEl.value === 'invoice') {
    list.render(crateInvoice(), 'Invoice', "start");
  } else {
    list.render(createPayment(), 'Payment', "end");;
  }
  formEl.reset();
};

formEl.addEventListener('submit', handleSubmit);
