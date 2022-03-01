export const QS = (query: string, el?: HTMLElement): HTMLElement | null =>
    el ? el.querySelector(query) : document.querySelector(query);

export const QSAll = (query: string, el?: HTMLElement): NodeListOf<HTMLElement> =>
    el ? el.querySelectorAll(query) : document.querySelectorAll(query);

export default QS;
