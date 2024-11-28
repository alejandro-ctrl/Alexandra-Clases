const Calcular = require("./calcular");
class Restar extends Calcular {
  Division(num1, num2) {
    let resultado = 0;
    resultado = num1 - num2;
    console.log(`Resta: ${resultado}`);
  }
}

module.exports = Restar;
