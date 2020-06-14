import Invoice from './classes/Invoice';
import Payment from './classes/Payment';
import ListTemplate from './classes/ListTemplate';
import HasFormater from './interfaces/HasFormater';

// form
const formEl = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const typeEl = formEl.querySelector('#type') as HTMLSelectElement;
const toFromEl = formEl.querySelector('#tofrom') as HTMLInputElement;
const detailsEl = formEl.querySelector('#details') as HTMLInputElement;
const amountEl = formEl.querySelector('#amount') as HTMLInputElement;

const crateInvoice = (values: [string, string, number]) => {
  const inv = new Invoice(...values);
  return inv;
};

const createPayment = (values: [string, string, number]) => {
  const payment = new Payment(...values);
  return payment;
};

const list = new ListTemplate();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  let doc: HasFormater;
  //tuple
  const values: [string, string, number] = [
    toFromEl.value,
    detailsEl.value,
    amountEl.valueAsNumber,
  ];
  if (typeEl.value === 'invoice') {
    list.render(crateInvoice(values), 'Invoice', 'start');
  } else {
    list.render(createPayment(values), 'Payment', 'end');
  }
  formEl.reset();
};

formEl.addEventListener('submit', handleSubmit);
