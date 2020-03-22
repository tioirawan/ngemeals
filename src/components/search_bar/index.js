import store from 'Store/reducer';
import actions from 'Store/actions';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';

const template = componentTemplate(html, style);

class SearchBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const query = event.target.query.value;

      store.dispatch(actions.setQuery(query));
      store.dispatch(actions.fetchMealsByQuery(query));
    });
  }
}

customElements.define('search-bar', SearchBar);
