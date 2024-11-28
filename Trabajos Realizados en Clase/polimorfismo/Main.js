import Rectangulo from "./Rectangulo.js";
import Circulo from "./Circulo.js";

let miRectangulo = new Rectangulo(5, 10) 
// Hallar el área y el perimetro del rectangulo
console.log(miRectangulo.calcularArea());
console.log(miRectangulo.calcularPerimetro());

let miCirculo = new Circulo(4)
console.log(miCirculo.calcularPerimetro());
console.log(miCirculo.calcularArea());

