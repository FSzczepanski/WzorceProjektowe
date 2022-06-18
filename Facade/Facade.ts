class FirstSubsystem{
    prepared = false
    prepare(): boolean{
        console.log("Preparing first subsystem")
        this.prepared = true
        return this.prepared
    }
}

class SecondSubsystem{
    secondMethod(): void{
        console.log("Second subsystem method")
    }
}

class ThirdSubsystem{
    count = 0
    increaseCount(increaseBy: number): void{
        this.count+=increaseBy
        console.log("Current count = "+this.count)
    }
}

class FourthSubsystem{
    fourthMethod(): void{
        console.log("Fourth subsystem method")
    }
}

class Facade{
    private firstSubsystem = new FirstSubsystem()
    private secondSubsystem = new SecondSubsystem()
    private thirdSubsystem = new ThirdSubsystem()
    private fourthSubsystem = new FourthSubsystem()
    
    operationA(): void{
        console.log("Method A() ----")
        const preparedFirstPart = this.firstSubsystem.prepare()
        if (preparedFirstPart){
            this.secondSubsystem.secondMethod()
            this.thirdSubsystem.increaseCount(4)
        }
    }

    operationB(): void{
        console.log("Method B() ----")
        const preparedFirstPart = this.firstSubsystem.prepare()
        if (preparedFirstPart)
        this.fourthSubsystem.fourthMethod()
    }
}

const facade = new Facade()

facade.operationA()
facade.operationB()