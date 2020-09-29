const newEl = (tag, classList = [], innerHtml = '', innerText = "") => {
    const el = document.createElement(tag)
    if (innerHtml) {
        el.innerHtml = innerHtml
    }
    if (innerText) {
        el.appendChild(document.createTextNode(innerText))
    }
    el.classList.add(...classList)
    return el;
}
const render = (template, values = {}) => {
    const wrapper = newEl('div')
    wrapper.insertAdjacentHTML('afterbegin', template(values))
    return wrapper.firstElementChild
}
export {
    newEl,
    render
}