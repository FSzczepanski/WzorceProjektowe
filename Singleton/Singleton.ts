class Singleton {
    private static instance: Singleton;
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

let application = () => {
    let s1 = Singleton.getInstance();
    let s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works!');
    } else {
        console.log('Singleton failed!');
    }
}

application();