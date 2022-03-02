import { RunnerFunction } from './types';

export default class Runner {
    private modulesToRun: RunnerFunction[];

    constructor() {
        this.modulesToRun = [];
    }

    register(fn: RunnerFunction) {
        this.modulesToRun.push(fn);
    }

    run() {
        this.modulesToRun.forEach((fn) => {
            fn();
        });
    }
}
