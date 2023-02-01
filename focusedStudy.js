// In this I'm going to recreate 007 in code but give it fantasy flavor and different classes and a special ability

// create base class of default actions for a player

//block
//
//

// wait on adding classes
// warrior bleed
//mage big attack
//rouge random number of dagers

// basics that each player will have
class Player {
    constructor(name, level, playerNum){
        this.name = name
        this.level = level
        this.playerNum = playerNum
        this.health = 100
        this.energy = 20
        this.blocking = false
    }
    charge(){
        this.energy += 15
    }
    block(){
        this.blocking = true
    }
} 

// extend to add archetype and their attacks
class Rouge extends Player{
    constructor(name, level, playerNum){
        super (name, level, playerNum)
        this.archetype = "rogue"
    }
    //
    attack(){
        if(this.playerNum === "p1"){
            let x = Math.ceil(Math.random() * 5)
            console.log(`The ${Player1.name} hit with 0 dagers, ${Player2.name} has taken 0 from this attack`)
            for(let i = 1; i < x; i++){
                console.log(`The ${Player1.name} hit with ${i} dagers, ${Player2.name} has taken ${i*15} from this attack`)

            }
            Player2.health = Player2.health - (x*15-15)
            console.log(`${Player2.name}'s health is now at ${Player2.health}`)
        }
        else if(this.playerNum === "p2"){
            let x = Math.ceil(Math.random() * 5)
            console.log(`The ${Player2.name} hit with 0 dagers, ${Player1.name} has taken 0 from this attack`)
            for(let i = 1; i < x; i++){
                console.log(`The ${Player2.name} hit with ${i} dagers, ${Player1.name} has taken ${i*15} from this attack`)

            }
            Player1.health = Player1.health - (x*15-15)
            console.log(`${Player1.name}'s health is now at ${Player1.health}`)
        }
    }
}

let Player1 = new Rouge("Parker", 5, "p1")
let Player2 = new Rouge("Hayat", 10, "p2")


// extend to give players unique abilities based on class architype they choose


while(Player1.health >= 0 && Player2.health >= 0){
    Player1.attack()
    Player2.attack()

}