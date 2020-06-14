import HasFormater from '../interfaces/HasFormater.js';

export default class ListTemplate {
  private listEl: HTMLUListElement;
  constructor() {
    this.listEl = document.querySelector('.item-list') as HTMLUListElement;
  }
  render(item: HasFormater, heading: string, position: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(h4, p);
    position === 'start' ? this.listEl.prepend(li) : this.listEl.append(li);
  }
}
