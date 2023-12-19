import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/listTemplate.js';
// TypeScript typecasting
const form = document.querySelector('.new-item-form');
// Grabbing the inputs of the form
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//Grabbing the unordered list in the HTML document
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values; //creating a tuple
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else
        doc = new Payment(...values);
    list.render(doc, type.value, 'start');
});
