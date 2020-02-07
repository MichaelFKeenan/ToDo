import { ItemData } from '../itemListItem/ItemData';

export interface IFilter extends HTMLElement {
  Active: boolean;
  filter(item: ItemData): boolean;
}
