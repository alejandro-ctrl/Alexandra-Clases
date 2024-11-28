class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  hacerSonido(volumen) {
    console.log(`${this.nombre} ladra a un volumen de ${volumen}: ¡Guau!`);
  }

  hacerSonido(intensidad, duracion) {
    console.log(
      `${this.nombre} gime con intensidad ${intensidad} durante ${duracion} segundos: ¡Hmm!`
    );
  }

  hacerSonido(estilo) {
    console.log(`${this.nombre} aúlla en estilo ${estilo}: ¡Aaaah!`);
  }

  info() {
    console.log(
      `Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad} años.`
    );
  }
}

const miPerro = new Perro("Rex", "Labrador", 5);
miPerro.hacerSonido("alto"); 
miPerro.hacerSonido("moderada", 3); 
miPerro.hacerSonido("melódico"); 
miPerro.info();
