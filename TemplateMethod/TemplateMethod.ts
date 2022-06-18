abstract class Process {
    envPrepared = false
    stepOne(): void {
        console.log("Preparing environment")
        this.envPrepared = true
    }

    abstract stepTwo(): void
    
    abstract stepThree(): void
    
    templateMethod(){
        this.stepOne()
        this.stepTwo()
        this.stepThree()
        console.log("Finished process")
    }
}

class FirstProcess extends Process{
    stepTwo(): void {
        console.log("Doing background work for first process")
    }

    stepThree(): void {
        console.log("finishing process one")
    }
}


class SecondProcess extends Process{
    count = 0
    stepOne() {
        super.stepOne();
        console.log("start counting")
        this.count++
    }

    stepTwo(): void {
        console.log("Doing background work for second process")
        this.count++
    }

    stepThree(): void {
        console.log("finishing process two with",this.count, "parts")
    }
}

const firstProcess = new FirstProcess()
const secondProcess = new SecondProcess()

firstProcess.templateMethod()
secondProcess.templateMethod()
    