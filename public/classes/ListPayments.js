export default class ListPayments {
    constructor() {
        this.listEl = document.querySelector('.item-list');
    }
    render(item, heading, position) {
        const template = `
      <li>
        <${heading}>Invoice</${heading}>
        <p>${item.format()}</p>
      </li>
    `;
        this.listEl.innerHTML += template;
    }
}
