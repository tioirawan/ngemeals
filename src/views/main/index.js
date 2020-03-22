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
        category, ingredient, query, meals, isLoading,
      } = store.getState();

      let title = 'Meals for you';

      if (category) {
        title = `<b>${category}</b> meals for you`;
      } else if (ingredient) {
        title = `Dishes with <b>${ingredient}</b>`;
      } else if (query) {
        if (isLoading) {
          title = `Searching for <b>${query}</b>...`;
        } else {
          title = `${meals && meals.length ? 'Search' : 'No'} results for <b>${query}</b>...`;
        }
      }

      this.shadowRoot.getElementById('title-category').innerHTML = title;


      mealsListContainer.innerHTML = '';

      if (isLoading) {
        this.shadowRoot.querySelector('#not-found').style.display = 'none';
        this.shadowRoot.querySelector('.lds-ripple ').style.display = 'inline-block';
      } else if (meals && meals.length) {
        this.shadowRoot.querySelector('.lds-ripple ').style.display = 'none';

        meals.forEach((meal) => {
          const mealElement = document.createElement('meal-item');

          mealElement.setAttribute('meal-id', meal.idMeal);
          mealElement.setAttribute('name', meal.strMeal);
          mealElement.setAttribute('img', meal.strMealThumb);

          mealsListContainer.append(mealElement);
        });
      } else {
        this.shadowRoot.querySelector('.lds-ripple ').style.display = 'none';
        this.shadowRoot.querySelector('#not-found').style.display = 'block';
      }
    });
  }
}

customElements.define('main-view', MainView);
