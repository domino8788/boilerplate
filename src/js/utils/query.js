const $ = (query, target = document) => {
    return target.querySelector(query);
}
const $$ = (query, target = document) => Object.values(target.querySelectorAll(query));

export {
    $,
    $$
}