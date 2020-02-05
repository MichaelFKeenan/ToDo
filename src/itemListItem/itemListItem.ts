import template from './template.html';
import { ItemData } from './ItemData';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

export class ItemListItem extends HTMLElement {
  private valueEl: HTMLElement | null = null;

  constructor(itemData: ItemData) {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));
    this.valueEl = shadow.getElementById('root__item');
    if (this.valueEl === null) {
      return;
    }
    this.valueEl.textContent = itemData.Name;
  }
}
window.customElements.define('item-list-item', ItemListItem);
