const Calcular = require("./calcular");
class Dividir extends Calcular {
    Division(num1, num2) {
        let resultado=0
      resultado= num1 / num2;
    console.log(`Division: ${resultado}`);
  }
}

module.exports = Dividir;
