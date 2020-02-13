import template from './template.html';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;

export class BaseFilter extends HTMLElement {
  Active = false;
  private buttonEl: HTMLElement | null = null;
  private filterDisplay: string = '';

  constructor(filterDisplay: string, active?: boolean) {
    super();
    console.log('base constructor');
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));

    this.filterDisplay = filterDisplay;
    if (active != null) {
      this.Active = active;
    }

    this.buttonEl = shadow.getElementById('root__button');
    if (this.buttonEl === null) return;

    this.buttonEl.innerHTML = this.filterDisplay + ' ' + (this.Active ? 'on' : 'off');

    this.buttonEl.addEventListener('click', this.handleClick);
  }

  private handleClick = () => {
    this.Active = !this.Active;
    if (this.buttonEl === null) return;
    this.buttonEl.innerHTML = this.filterDisplay + ' ' + (this.Active ? 'on' : 'off');
    this.dispatchEvent(new CustomEvent('filter'));
  };

  public disconnectedCallback() {
    if (this.buttonEl === null) {
      return;
    }
    this.buttonEl.removeEventListener('click', this.handleClick);
  }
}
