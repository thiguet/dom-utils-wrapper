export default (fn: EventListenerOrEventListenerObject, opts: AddEventListenerOptions | boolean = false): void => {
    window.addEventListener('scroll', fn, opts);
};
