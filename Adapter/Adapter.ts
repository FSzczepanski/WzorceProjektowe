class Target {
    public request(): string {
        return 'Called Target request()';
    }
}

class Adaptee {
    public adapteeRequest(): string {
        return 'Called Adaptee adapteeRequest()';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.adapteeRequest();
        return `Adapter: ${result}`;
    }
}

const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.adapteeRequest()}`);