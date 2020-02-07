import { IFilter } from './IFilter';
import { ItemData } from '../itemListItem/ItemData';
import { BaseFilter } from './baseFilter';

export class ItemCompleteFilter extends BaseFilter implements IFilter {
  filter(item: ItemData): boolean {
    return this.Active ? !item.Complete : true;
  }

  constructor() {
    super('incomplete only', true);
  }
}
window.customElements.define('item-complete-filter', ItemCompleteFilter);
