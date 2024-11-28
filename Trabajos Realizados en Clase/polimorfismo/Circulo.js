import Figura from "./Figura.js";

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }
  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }

  info() {
    console.log(`Radio: ${this.radio}`);
    console.log(`Área: ${this.calcularArea().toFixed(2)}`);
    console.log(`Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
  }
}

const miCirculo = new Circulo(5);
miCirculo.info();

export default Circulo;
