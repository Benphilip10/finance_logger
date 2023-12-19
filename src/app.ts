import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payment.js';
import { hasFormatter } from './interfaces/hasFormatter.js';
import { ListTemplate } from './classes/listTemplate.js';

// TypeScript typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Grabbing the inputs of the form
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//Grabbing the unordered list in the HTML document
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    
let values: [string, string, number]; //creating a tuple
values = [toFrom.value, details.value, amount.valueAsNumber];

let doc:hasFormatter;

if (type.value === 'invoice') {
    doc = new Invoice(...values);
} 
else  doc = new Payment(...values);

    list.render(doc, type.value, 'start');
})