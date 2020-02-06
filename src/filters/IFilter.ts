import { ItemData } from '../itemListItem/ItemData';

export interface IFilter extends HTMLElement {
  Name: string;
  Active: boolean;
  filter(item: ItemData): boolean;
}
