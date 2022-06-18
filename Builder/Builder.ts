class Vehicle{
    parts:Array<string> = []

    addPart = (part: string) => {
        this.parts.push(part);
    }

    show() {
        console.log("Vehicle parts:")
        this.parts.forEach((vehicle) => console.log(vehicle))
    }
}


interface IBuilder {
    produceWheels(): void
    produceEngine(): void
    produceAutoBody(): void
    getCar(): Vehicle
}

class Ferrari implements IBuilder{
    private car = new Vehicle()

    produceAutoBody() {
        this.car.addPart("Red auto body")
    }

    produceEngine() {
        this.car.addPart("Engine v8")
    }

    produceWheels() {
        this.car.addPart("4 wheels")
    }

    getCar(): Vehicle {
        return this.car;
    }
}


class Fiat implements IBuilder{
    private car = new Vehicle()

    produceAutoBody() {
        this.car.addPart("Yellow auto body")
    }

    produceEngine() {
        this.car.addPart("Engine v4")
    }

    produceWheels() {
        this.car.addPart("4 wheels")
    }

    getCar(): Vehicle {
        return this.car;
    }
}

class Director {

    public produceCar = (builder: IBuilder) => {
        builder.produceAutoBody()
        builder.produceEngine()
        builder.produceWheels()
    }
}

let director = new Director()
let builderFerrari = new Ferrari()
let builderFiat = new Fiat()

director.produceCar(builderFerrari)
builderFerrari.getCar().show()

director.produceCar(builderFiat)
builderFiat.getCar().show()