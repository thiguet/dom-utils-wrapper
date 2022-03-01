import { QS } from '../QS';

describe('QS - Query Selector Wrapper', () => {
    const build = () => {
        return {
            window,
            document,
        };
    };

    const createFakeElement = (document: Document): HTMLElement => document.createElement('div');

    it('QS - Single Query Selector - Ensure that we are calling document from the global scope', () => {
        const { document } = build();

        expect(document).toStrictEqual(global.document);
    });

    it('QS - Single Query Selector - Using document variable - Not found', () => {
        build();

        const result = QS('#no-element');

        expect(result).toBe(null);
    });
    it('QS - Single Query Selector - Using document variable - Element found', () => {
        const { document } = build();
        const fakeElement = createFakeElement(document);
        fakeElement.setAttribute('id', 'test');

        document.body.insertAdjacentElement('afterbegin', fakeElement);

        const result = document.querySelector('#test');

        expect(result).not.toBe(null);
        expect(result!.getAttribute('id')).toBe(fakeElement.getAttribute('id'));
    });
    it('QS - Single Query Selector - Using element variable - Element not found', () => {
        const { document } = build();
        const fakeElement = createFakeElement(document);

        document.body.insertAdjacentElement('afterbegin', fakeElement);

        const result = document.querySelector('#test-child')!;

        expect(result).toBe(null);
    });
    it('QS - Single Query Selector - Using element variable - Element found', () => {
        const { document } = build();
        const fakeElement = createFakeElement(document);
        const fakeChildElement = createFakeElement(document);

        fakeElement.setAttribute('id', 'test');
        fakeChildElement.setAttribute('id', 'test-child');

        fakeElement.insertAdjacentElement('afterbegin', fakeChildElement);
        document.body.insertAdjacentElement('afterbegin', fakeElement);

        const result = document.querySelector('#test-child')!;

        expect(result).not.toBe(null);
        expect(result.getAttribute('id')).toBe(fakeChildElement.getAttribute('id'));
    });
});
