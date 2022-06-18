interface ICharacter {
    type: CharacterType,
    health: number,
    power: number,
    ability: string,
    describe(): void
}

enum CharacterType{
    Mage, Gopnik
}

class Mage implements ICharacter{
    type: CharacterType
    health: number
    power: number
    ability: string

    constructor() {
        this.type = CharacterType.Mage
        this.health = 58
        this.power = 10
        this.ability = "Magic"
    }

    describe(): void{
        console.log("Character: "+CharacterType[this.type])
        console.log("Health: "+this.health)
        console.log("Power: "+this.power)
        console.log("ability: "+this.ability)
    }
}

class Gopnik implements ICharacter{
    type: CharacterType
    health: number
    power: number
    ability: string
    
    constructor() {
        this.type = CharacterType.Gopnik
        this.health = 90
        this.power = 5
        this.ability = "Throwing bottles"
    }

    describe(): void{
        console.log("Character: "+CharacterType[this.type])
        console.log("Health: "+this.health)
        console.log("Power: "+this.power)
        console.log("ability: "+this.ability)
    }
}


class Factory {
    public static createCharacter(type: CharacterType): ICharacter | null{
        if (type == CharacterType.Gopnik){
            return new Gopnik()
        }else if (type == CharacterType.Mage){
            return new Mage()
        }else{
            return null;
        }
    }
}


const mage = Factory.createCharacter(CharacterType.Mage)
const gopnik = Factory.createCharacter(CharacterType.Gopnik)

mage?.describe()
console.log("///")
gopnik?.describe()