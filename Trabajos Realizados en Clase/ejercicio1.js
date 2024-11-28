let deportes = {
  conBalon: ["futbol", "basketball", "futbol Americano"],

  sinBalon: ["natacion", "atletismo", "tejo"],
};
let persona = {
  nombre: "Alejandro",
  edad: "20",
  estudios: {
    carrera: "Tecnico en sistemas",
    semestre: "4",
  },
};
console.log("deportes: " + deportes.conBalon[1]);
console.log("deportes: " + deportes.sinBalon);
console.log(
  "La persona es: " + persona.nombre,
  " y su edad es " + persona.edad
);
//asignar
persona.nombre = "Edwin";
console.log("persona: " + persona.nombre);
console.log("Carrera: " + persona.estudios.carrera);

var marcasAutos = {};
marcasAutos.marca = ["Honda", "Toyota", "Ford"];
console.log(marcasAutos);
delete marcasAutos.marca;
console.log(marcasAutos.marca);

var mascota = {
  nombre: "Pepito",
  raza: "criollo",
  edad: "3",
  informacion: function () {
    console.log("mascota: " + this.nombre + " " + this.raza);
  },
};
mascota.informacion();
