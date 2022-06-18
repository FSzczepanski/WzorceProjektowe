interface Iterator<T> {
    next(): T;
    getElement(): T,
    isEnd(): boolean,
    key(): number;
    valid(): boolean;
}

class SpecificIterator implements Iterator<string> {
    private collection: NamesList;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: NamesList, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public getElement(): any {
        return this.collection.getItems()[this.position];
    }

    public isEnd(): boolean {
        return this.position == this.collection.getCount();
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

interface Aggregator {
    getIterator(): Iterator<string>;
}

class NamesList implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new SpecificIterator(this);
    }
}

const collection = new NamesList();
collection.addItem('Jan');
collection.addItem('Ania');
collection.addItem('Zbigniew');

const iterator = collection.getIterator();
while (iterator.valid() && iterator.isEnd() != true) {
    console.log(iterator.next());
}
