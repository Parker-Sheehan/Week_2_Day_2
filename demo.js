let person = {
    firstName: "Lukas",
    lastName: "Nessi",
    age: 25
}

console.log(person)
console.log(person["firstName"])
console.log(person.lastName)

let meal = {
    appetizer: {food:'chips and salsa', size:'large'},
    entree: "Chicken enchiladas",
    dessert: "tres leches cake",
    drink: "horchata"
}

let {entree} = meal

console.log(entree)
console.log(meal.entree)
console.log(meal.appetizer)

let {appetizer,dessert,drink: bestDrinkEver} = meal

console.log(appetizer,dessert,bestDrinkEver)

for(key in meal){
    console.log(meal[key])
}

person.job = 'Instructor'
person.isCool = false

delete person.age

console.log(person)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    speak(times){
        for(let i=0;i<times;i++){
        return `hello my name is ${this.name}`
        }
    }
}

let dozer = new Dog('dozer','retriever', 5)
let roxie = new Dog('roxie','doberman', 3)

console.log(dozer)
console.log(roxie)

roxie.speak(5)

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let dixie = new Puppy('dixie','boxer',1,0)

console.log(dixie)

dixie.levelUp(100)
dixie.speak(2)

console.log(dixie)

let names = ["kijo", "benji", "numpy", "domino", "teddy" ]
let breeds = ["weenie", "boxer", "doberman", "poodle", "lab"]

let dogs = []

let makeDogs = () =>{
    for(let i = 0; i < 5; i++){
        let newDog = new Dog(names[i],breeds[i],3)
        dogs.push(newDog)
    }
}

makeDogs()
console.log(dogs)

dogs[0].speak(2)

for(let i = 0; i<dogs.length; i++){
    console.log(dogs[i].speak(2),`and I'm a ${dogs[i].breed}`)

}

