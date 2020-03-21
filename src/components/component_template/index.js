import html from "./template.html";

import "./style.css";

const template = document.createElement('template');

template.innerHTML = html

class ComponentName extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        // ...const imageSource = this.getAttribute("img") || "";

        // ...
    }
}

customElements.define("compponent-name", ComponentName)
