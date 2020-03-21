import html from "./template.html";

import "./style.css";

const template = document.createElement('template');

template.innerHTML = html

class MealItem extends HTMLElement {
    constructor() {
        super();

        // console.log(style)

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const imageSource = this.getAttribute("img") || "";

        this.shadowRoot.getElementById("meal-image").src = imageSource
    }
}

customElements.define("meal-item", MealItem)
