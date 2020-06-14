export default class ListTemplate {
    constructor() {
        this.listEl = document.querySelector('.item-list');
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(h4, p);
        position === 'start' ? this.listEl.prepend(li) : this.listEl.append(li);
    }
}
