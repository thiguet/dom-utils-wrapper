import Resize from '../Resize';

describe('Resize Wrapper', () => {
    it('Resize Wrapper - Call function on resize', () => {
        const fn = jest.fn();

        Resize(fn, true);

        document.dispatchEvent(new Event('resize'));

        expect(fn).toBeCalled();
    });
});
