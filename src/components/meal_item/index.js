import html from "./template.html";
import style from "./style.css";

import componentTemplate from 'Utils/componentTemplate.js'

const template = componentTemplate(html, style);

class MealItem extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const imageSource = this.getAttribute("img") || "";

        // this.shadowRoot.getElementById("meal-image").src = imageSource
    }
}

customElements.define("meal-item", MealItem)
