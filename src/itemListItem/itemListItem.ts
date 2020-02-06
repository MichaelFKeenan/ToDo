import template from './template.html';
import { ItemData } from './ItemData';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

export class ItemListItem extends HTMLElement {
  private nameEl: HTMLElement | null = null;
  private completeEl: HTMLElement | null = null;

  constructor(itemData: ItemData) {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));

    this.nameEl = shadow.getElementById('item__name');
    if (this.nameEl === null) {
      return;
    }
    this.nameEl.textContent = itemData.Name;

    this.completeEl = shadow.getElementById('item__complete');
    if (this.completeEl === null) {
      return;
    }

    this.completeEl.textContent = itemData.Complete === true ? 'complete' : 'incomplete';
  }
}
window.customElements.define('item-list-item', ItemListItem);
