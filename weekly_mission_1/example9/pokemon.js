
/*
Crea el archivo pokemon.js. 3, Crea una clase Pokemon, exportala usando CommonJS, de tal forma que pueda usarse como se indica previamente.
Crea la clase.
Crea un constructor que permita recibir un nombre.
Crea la función sayHello().
Crea la función sayMessage().
Exporta la clase para que pueda ser importada en el archivo main.js.
*/

class Logger {
    constructor(name) {
        this.name = name
    }

}


export default class Pokemon {

    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log(`Hola, soy ${this.name}`)
    }

    sayMessage(message) {
        console.log(`${this.name}: ${message}`)
    }
}


const pikachu = new Pokemon("Pikachu")
const bulbasaur = new Pokemon("Bulbasaur")
const squirtle = new Pokemon("Squirtle")
const charmander = new Pokemon("Charmander")


pikachu.sayHello()
pikachu.sayMessage("Heey!")


