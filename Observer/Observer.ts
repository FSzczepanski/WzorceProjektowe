interface INews {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}

interface IObserver {
    update(news:string):void
}

class Newspaper implements INews {
    private observers:Array<Observer> = [];
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.name !== element.name
        })
    }
    notify(news:string) {
        this.observers.forEach(observer => {
            observer.update(news);
        })
    }
}

class Observer implements IObserver {
    constructor(public readonly name:string) {}
    private received:Array<string> = [];
    
    showReceivedNews() {
        console.log(this.name + ":")
        console.log("received news: ", this.received)
    }
    update(news:string) {
        this.received.push(news)
    }
}


const person1 = new Observer("Tom");
const person2 = new Observer("Andrzej");

const newspaper = new Newspaper();

newspaper.subscribe(person1);
newspaper.subscribe(person2);
newspaper.notify("Microsoft launches new stunning tool.");
newspaper.unsubscribe(person2);
newspaper.notify("C# 10 new features, check out.");
person1.showReceivedNews();
person2.showReceivedNews()