import template from './template.html';
import { ItemListItem } from '../itemListItem/itemListItem';
import { ItemData } from '../itemListItem/ItemData';
import { ItemCompleteFilter } from '../filters/itemCompleteFilter';
import { IFilter } from '../filters/IFilter';
import { HighPriorityFilter } from '../filters/highPriorityFilter';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

class ItemList extends HTMLElement {
  private listEl: HTMLElement | null = null;
  private itemsData: ItemData[] = [];
  private filters: IFilter[] = [];

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));

    this.registerFilters(shadow);

    this.listEl = shadow.getElementById('root__list');
  }

  async connectedCallback() {
    this.itemsData = require('../../toDoItems.json') as ItemData[];

    // some filters may be on by default, so filter immediately
    this.filterResults();
  }

  public disconnectedCallback() {
    this.filters.forEach(filter => {
      filter.removeEventListener('filter', this.handleFilter);
    });
  }

  private registerFilters = (shadow: ShadowRoot) => {
    this.filters.push(new ItemCompleteFilter());
    this.filters.push(new HighPriorityFilter());
    this.filters.forEach(filter => {
      filter.addEventListener('filter', this.handleFilter);
      shadow.appendChild(filter);
    });
  };

  private handleFilter = () => {
    this.filterResults();
  };

  private filterResults = () => {
    const filteredResults = this.itemsData.filter(item => {
      // only do active filters?
      return this.filters.every(filter => filter.filter(item));
    });
    this.setResults(filteredResults);
  };

  private setResults = (items: ItemData[]) => {
    // should we hide filtered items? ie, find all elements where id not in this list and hide them
    if (this.listEl == null) return;
    this.listEl.innerHTML = '';
    items.forEach(item => {
      const listItem = new ItemListItem(item);
      if (this.listEl == null) return;
      this.listEl.appendChild(listItem);
    });
  };
}
window.customElements.define('item-list', ItemList);
