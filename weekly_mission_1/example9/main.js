const Pokemon = require('./pokemon');

const pikachu = new Pokemon("Pikachu")
const bulbasaur = new Pokemon("Bulbasaur")
const squirtle = new Pokemon("Squirtle")
const charmander = new Pokemon("Charmander")


pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")


module.exports = Pokemon;