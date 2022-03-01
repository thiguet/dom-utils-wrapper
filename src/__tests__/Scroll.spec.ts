import Scroll from '../Scroll';

describe('Scroll Wrapper', () => {
    it('Scroll Wrapper - Call function on Scroll', () => {
        const fn = jest.fn();

        Scroll(fn, true);

        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalled();
    });
});
