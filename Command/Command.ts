
class Receiver {
    run(value?: string):void{
        if (value){
            console.log("Running operation: ",value)
        }else{
            console.log("Running operation")
        }
    }
}

interface Command{
    perform(): void
}


class SimpleCommand implements Command{
    public perform(): void {
        console.log("Simple command")
    }
}

class OperationCommand implements Command{
    private receiver: Receiver
    private value: string
    
    constructor(receiver: Receiver, value: string) {
        this.receiver = receiver
        this.value =value
    }
    
    perform(): void {
        this.receiver.run(this.value)
    }
}

class Invoker {
    private simpleCommand: Command | undefined
    private operationCommand: Command | undefined
    
    setOnStartCommand(command: Command): void{
        this.simpleCommand = command
    }

    setOperationCommand(command: Command): void{
        this.operationCommand = command
    }
    
    performOperation():void{
        if (this.simpleCommand)
            this.simpleCommand.perform()
        
        if (this.operationCommand)
            this.operationCommand.perform()
    }
}
const invoker = new Invoker()

invoker.setOnStartCommand(new SimpleCommand())
const receiver = new Receiver()
invoker.setOperationCommand(new OperationCommand(receiver,  "important operation"),)
invoker.performOperation()





