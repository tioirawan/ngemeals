import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MealMasonry extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('meal-masonry', MealMasonry);
