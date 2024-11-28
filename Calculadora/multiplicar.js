const Calcular = require("./calcular");
class Multiplicar extends Calcular {
  Multiplicacion(num1, num2) {
    let resultado = 0;
    resultado = num1 * num2;
    console.log(`Multiplicacion: ${resultado}`);
  }
}

module.exports = Multiplicar;
