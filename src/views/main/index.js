import store from 'Store/reducer';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class MainView extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    store.subscribe(() => {
      this.shadowRoot.getElementById('title-category').innerText = store.getState().category;
    });
  }
}

customElements.define('main-view', MainView);
