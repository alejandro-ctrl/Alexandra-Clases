const Calcular = require("./calcular");
class Sumar extends Calcular {
  Division(num1, num2) {
    let resultado = 0;
    resultado = num1 / num2;
    console.log(`Sumar: ${resultado}`);
  }
}

module.exports = Sumar;
