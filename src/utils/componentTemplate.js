export default function (html, css) {
    const template = document.createElement('template');

    template.innerHTML = `
        <style>
            *::after,
            *::before {
                box-sizing: inherit;
            }

            * {
                box-sizing: border-box;
            }

            ${css}
        </style>

        ${html}
    `

    return template
}
