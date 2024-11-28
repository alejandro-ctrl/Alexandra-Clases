class Auto {
  constructor(marca1, modelo1, año1, color1) {
    this.marca = marca1;
    this.modelo = modelo1;
    this.año = año1;
    this.color = color1;
  }
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  } //SET ES PARA ALMACENAR
  
  getMarca() {
    return this.marca;
  } // GET ES PARA EXTRAER/VISUALIZAR
  informacion() {
    console.log(
      "datos de la persona" +
        this.marca +
        this.modelo +
        this.año +
        this.color
    );
  }
}
let Carro = new Auto(
  " Honda ",
  "City lx ",
  " 2020 ",
  " Rojo"
);
Carro.informacion();
let Ferrari = new Auto(" Ferrari ", " SF90 ", " 2007 ", " Rojo");
Ferrari.informacion();
/*personita.nombre = " Raul ";
personita.informacion();

personita.setNombre("Raul");
consolepe.getNombre(personita.getNombre());

//realizar clase auto, teniendo en cuenta que tiene marca, modelo, año y color. crear un objeto para la marca Honda y para la marca Ferrari*/