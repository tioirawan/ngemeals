import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MealItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const imageSource = this.getAttribute('img') || '';
    const mealName = this.getAttribute('name') || '';

    this.shadowRoot.getElementById('meal-image').src = imageSource;
    this.shadowRoot.getElementById('meal-name').innerText = mealName;
  }
}

customElements.define('meal-item', MealItem);
