class ComputerPartsFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('Factory: Flyweight not found, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    public listComputerParts(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState : any): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
    }
}


const computerPartsFactory = new ComputerPartsFactory([
    ['AMD', '5600X', 'Processor'],
    ['Intel', 'I7 4770K', 'Processor'],
    ['Nvidia', 'RTX 3060', 'Graphic card'],
    ['AMD', 'RX 6900 XT', 'Graphic card'],
]);
computerPartsFactory.listComputerParts();

function addToCart(
    ff: ComputerPartsFactory, orderNumber: string, owner: string,
    brand: string, model: string, color: string,
) {
    console.log('Shop: Product added to cart!');
    const flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([orderNumber, owner]);
}

addToCart(computerPartsFactory, '4fcdae17-38a5-430a-8cc4-b7a8f2edb7c4', 'Jim Halpert', 'AMD', '5600X', 'Processor');

addToCart(computerPartsFactory, '14401498-03a2-4783-84a5-c625a3efc748', 'Dwight Kurt Schrute', 'AMD', 'RX 6900 XT', 'Graphic card');

computerPartsFactory.listComputerParts();