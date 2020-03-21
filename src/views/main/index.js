import store from 'Store/reducer';
import actions from 'Store/actions';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MainView extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    store.dispatch(actions.fetchMealsByCategory());
  }

  connectedCallback() {
    const mealsListContainer = this.shadowRoot.querySelector('meal-masonry');

    store.subscribe(() => {
      const { category, meals } = store.getState();

      this.shadowRoot.getElementById('title-category').innerText = category;


      mealsListContainer.innerHTML = '';

      meals.forEach((meal) => {
        const mealElement = document.createElement('meal-item');

        mealElement.setAttribute('meal-id', meal.idMeal);
        mealElement.setAttribute('name', meal.strMeal);
        mealElement.setAttribute('img', meal.strMealThumb);

        mealsListContainer.append(mealElement);
      });
    });
  }
}

customElements.define('main-view', MainView);
