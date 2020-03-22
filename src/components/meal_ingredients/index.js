import store from 'Store/reducer';
import actions from 'Store/actions';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MealIngredients extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.categories = this.shadowRoot.getElementById('meal-ingredients');

    this.setupButton();
  }


  setupButton() {
    Object.values(this.categories.children).forEach((buttonElement) => {
      const btnIngredient = buttonElement;
      const btnIngredientValue = btnIngredient.value;

      btnIngredient.addEventListener('click', () => {
        store.dispatch(actions.setIngredient(btnIngredientValue));
        store.dispatch(actions.fetchMealsByIngredient(btnIngredientValue));
      });
    });
  }
}

customElements.define('meal-ingredients', MealIngredients);
