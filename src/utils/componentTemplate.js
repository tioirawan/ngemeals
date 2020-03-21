export default function (html, css) {
    const template = document.createElement('template');

    template.innerHTML = `<style>${css}</style>${html}`

    return template
}
