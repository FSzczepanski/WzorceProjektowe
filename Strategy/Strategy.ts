interface Strategy {
    doWork(data: string): string;
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public resolveIssue(problem: string): void {
        console.log('Checking which strategy should be used to resolve: ',problem);
        const result = this.strategy.doWork(problem);
        console.log("resolved: ");
        console.log(result);
    }
}


class StrategyA implements Strategy {
    public doWork(value: string): string {
        return "Values have been sorted";
    }
}

class StrategyB implements Strategy {
    public doWork(value: string): string {
        return "Unused values have been removed";
    }
}


const context = new Context(new StrategyA());
console.log('First issue');
context.resolveIssue("Sort values");

console.log('');

console.log('Second issue');
context.setStrategy(new StrategyB());
context.resolveIssue("Remove unused values");