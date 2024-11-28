import Vehiculo from "./Vehiculo.js"


class Coche extends Vehiculo {
  mover(distancia, velocidad) {
    console.log(`Coche: ${distancia} ${velocidad}`);
  }
}

export default Coche