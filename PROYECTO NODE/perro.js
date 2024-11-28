const Animal = require("./animal");
class Perro extends Animal {
  hacerSonido() {
    console.log("Este es el sonido del perro");
  }
}
module.exports = Perro;
