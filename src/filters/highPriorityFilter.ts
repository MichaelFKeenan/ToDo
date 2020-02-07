import { IFilter } from './IFilter';
import { ItemData } from '../itemListItem/ItemData';
import { BaseFilter } from './baseFilter';

export class HighPriorityFilter extends BaseFilter implements IFilter {
  filter(item: ItemData): boolean {
    return this.Active ? item.Priority >= 3 : true;
  }

  constructor() {
    super('high priority only');
  }
}
window.customElements.define('high-priority-filter', HighPriorityFilter);
