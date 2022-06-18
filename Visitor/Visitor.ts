interface VisitorComponent {
    accept(visitor: Visitor): void;
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;

    visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteComponentA implements VisitorComponent {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return 'Exclusive method ConcreteComponentA called';
    }
}

class ConcreteComponentB implements VisitorComponent {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    public exclusiveMethodOfConcreteComponentB(): string {
        return 'Exclusive method ConcreteComponentB called';
    }
}

class ConcreteVisitorA implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} from class ConcreteVisitorA`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentB()} from class ConcreteVisitorA`);
    }
}

class ConcreteVisitorB implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} from class ConcreteVisitorB`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentB()} from class ConcreteVisitorB`);
    }
}

function visitorApp(components: VisitorComponent[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];

let visitor1 = new ConcreteVisitorA();
visitorApp(components, visitor1);

let visitor2 = new ConcreteVisitorB();
visitorApp(components, visitor2);