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
      const {
        category, ingredient, meals, isLoading,
      } = store.getState();

      let title = 'Meals for you';

      if (category) {
        title = `<b>${category}</b> meals for you`;
      } else if (ingredient) {
        title = `Dishes with <b>${ingredient}</b>`;
      }

      this.shadowRoot.getElementById('title-category').innerHTML = title;


      mealsListContainer.innerHTML = '';

      if (isLoading) {
        this.shadowRoot.querySelector('.lds-ripple ').style.display = 'inline-block';
      } else {
        this.shadowRoot.querySelector('.lds-ripple ').style.display = 'none';


        if (meals && meals.length) {
          meals.forEach((meal) => {
            const mealElement = document.createElement('meal-item');

            mealElement.setAttribute('meal-id', meal.idMeal);
            mealElement.setAttribute('name', meal.strMeal);
            mealElement.setAttribute('img', meal.strMealThumb);

            mealsListContainer.append(mealElement);
          });
        }
      }
    });
  }
}

customElements.define('main-view', MainView);
