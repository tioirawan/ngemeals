import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class IngredientButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.ingredient = this.getAttribute('text') || '';

    this.shadowRoot.querySelector('button').innerText = this.ingredient;
  }

  set clickEvent(event) {
    this.elementClickEvent = event;
  }

  get value() {
    return this.ingredient;
  }
}

customElements.define('ingredient-button', IngredientButton);
