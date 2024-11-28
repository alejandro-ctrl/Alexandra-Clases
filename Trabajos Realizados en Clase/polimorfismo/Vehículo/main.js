import Coche from "./Coche.js";
import Avion from "./Avion.js";

function mover(hijas) {
  hijas.mover(5, 4);
}
let cochecito = new Coche();
let avioncito = new Avion();
mover(cochecito);
mover(avioncito);

{/*//Polimorfismo
function mover(objeto) {
  objeto.mover(2, 5);
}
let miCoche = new Coche();
let miAvion = new Avion();
mover(miCoche);
mover(miAvion);
*/}