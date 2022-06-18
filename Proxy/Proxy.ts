interface Item {
    request(): void;
}

class SpecificItem implements Item {
    public request(): void {
        console.log('Request made');
    }
}

class Proxy implements Item {
    private specificItem: SpecificItem;

    constructor(specificItem: SpecificItem) {
        this.specificItem = specificItem;
    }

    public request(): void {
        this.specificItem.request();
    }
}

let proxyApp = (subject: Item) => {
    subject.request();
}

const specificItem = new SpecificItem();
proxyApp(specificItem)

const proxy = new Proxy(specificItem);
proxyApp(proxy);