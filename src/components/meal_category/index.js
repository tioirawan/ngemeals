import store from 'Store/reducer';
import actions from 'Store/actions';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MealCategory extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.categories = this.shadowRoot.getElementById('meal-category');

    store.subscribe(this.setSelectedCategory.bind(this));

    this.setSelectedCategory();
    this.setupButton();
  }


  setupButton() {
    Object.values(this.categories.children).forEach((buttonElement) => {
      const btnCategory = buttonElement;
      const btnCategoryValue = btnCategory.innerHTML;

      btnCategory.addEventListener('click', () => {
        store.dispatch(actions.setCategory(btnCategoryValue));
        store.dispatch(actions.fetchMealsByCategory(btnCategoryValue));
      });
    });
  }

  setSelectedCategory() {
    const { category } = store.getState();

    Object.values(this.categories.children).forEach((buttonElement) => {
      const currentButton = buttonElement;

      currentButton.style.backgroundColor = currentButton.innerHTML === category ? '#ff7675' : '#636e72';
    });
  }
}

customElements.define('meal-category', MealCategory);
