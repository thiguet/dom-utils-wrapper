import Runner from '../Runner';

describe('Runner tests', () => {
    it('Testing the run method', () => {
        const spy = jest.fn();

        const runner = new Runner();

        runner.register(spy);
        runner.run();

        expect(spy).toHaveBeenCalled();
    });
});
