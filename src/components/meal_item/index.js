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
    const mealName = this.getAttribute('name') || '';

    this.shadowRoot.getElementById('meal-name').innerText = mealName;
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'img') {
      const imageElement = this.shadowRoot.getElementById('meal-image');
      imageElement.src = newValue;

      imageElement.addEventListener('load', () => {
        this.shadowRoot.querySelector('.lds-ellipsis').style.display = 'none';
      });
    }
  }

  static get observedAttributes() {
    return ['img'];
  }
}

customElements.define('meal-item', MealItem);
