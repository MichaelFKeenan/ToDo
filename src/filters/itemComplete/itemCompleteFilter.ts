import template from './template.html';
import { IFilter } from '../IFilter';
import { ItemData } from '../../itemListItem/ItemData';

const showAllText = 'Show All';
const showIncompleteOnlyText = 'Show Incomplete Only';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

export class ItemCompleteFilter extends HTMLElement implements IFilter {
  Name = 'Item Complete Filter';
  Active = false;
  filter(item: ItemData): boolean {
    return this.Active ? item.Complete : true;
  }

  private buttonEl: HTMLElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));

    this.buttonEl = shadow.getElementById('root__button');
    if (this.buttonEl === null) return;

    this.buttonEl.innerHTML = showIncompleteOnlyText;

    this.buttonEl.addEventListener('click', () => {
      this.Active = !this.Active;
      if (this.buttonEl === null) return;
      this.buttonEl.innerHTML = this.Active ? showAllText : showIncompleteOnlyText;
      this.dispatchEvent(new CustomEvent('filter'));
    });
  }
}
window.customElements.define('item-complete-filter', ItemCompleteFilter);
