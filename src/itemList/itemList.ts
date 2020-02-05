import template from './template.html';
import { ItemListItem } from '../itemListItem/itemListItem';
import { ItemData } from '../itemListItem/ItemData';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

class ItemList extends HTMLElement {
  private listEl: HTMLElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));
    this.listEl = shadow.getElementById('root__list');

    const item1 = new ItemListItem(new ItemData('item 1'));
    const item2 = new ItemListItem(new ItemData('item 2'));

    if (this.listEl != null) {
      this.listEl.appendChild(item1);
      this.listEl.appendChild(item2);
    }
  }
}
window.customElements.define('item-list', ItemList);
