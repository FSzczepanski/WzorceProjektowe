interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'Concrete Component';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

let appDecorator = (component: Component) => {
    console.log(`Result: ${component.operation()}`);
}

const component = new ConcreteComponent();
appDecorator(component);
const concreteDecoratorA = new ConcreteDecoratorA(component);
const concreteDecoratorB = new ConcreteDecoratorB(concreteDecoratorA);
appDecorator(concreteDecoratorB);