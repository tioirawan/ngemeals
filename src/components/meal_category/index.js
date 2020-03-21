import store from "Store/reducer.js";
import { setCategory } from "Store/actions.js";

import html from "./template.html";
import style from "./style.css";

import componentTemplate from 'Utils/componentTemplate.js'

const template = componentTemplate(html, style);

class MealCategory extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const categories = this.shadowRoot.getElementById('meal-category');

        store.subscribe(() => {
            this.setSelectedCategory(categories)
        });

        this.setSelectedCategory(categories)
        this.setupButton(categories);
    }


    setupButton(categories) {
        for (let i = 0; i < categories.children.length; i++) {
            const btnCategory = categories.children[i];
            const btnCategoryValue = btnCategory.innerHTML;

            btnCategory.addEventListener("click", event => {
                store.dispatch(setCategory(btnCategoryValue))
            });
        }
    }

    setSelectedCategory(categories) {
        const category = store.getState().category;

        for (let buttonElement of categories.children) {
            buttonElement.style.backgroundColor = buttonElement.innerHTML === category ? "#ff7675" : "#636e72"
        }
    }
}

customElements.define("meal-category", MealCategory)
