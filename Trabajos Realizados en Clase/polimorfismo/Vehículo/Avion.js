import Vehiculo from "./Vehiculo.js"

class Avion extends Vehiculo {
  mover(distancia, velocidad) {
    console.log(`Avión: ${distancia} ${velocidad}`);
  }
}

export default Avion