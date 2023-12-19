import { hasFormatter } from "../interfaces/hasFormatter";

export class ListTemplate {
    constructor (private container: HTMLUListElement){}

    render (item:hasFormatter, heading:string, position: 'start'|'end')
    {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);                  //add heading to the list 

        const p = document.createElement('p');
        p.innerText = item.output();
        li.append(p);                   //add paragraph to the list

        if (position === 'start')
        { 
            this.container.prepend(li);
        } 
        else {
            this.container.append(li);
        }

    }
}
