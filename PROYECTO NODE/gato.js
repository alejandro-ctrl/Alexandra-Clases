const Animal = require("./animal");
class Gato extends Animal {
  hacerSonido() {
    console.log("Este es el sonido del gato");
    } 
    
}

module.exports = Gato;
