class Persona {
  constructor(nombre1, apellido1, direccion1, telefono1) {
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.direccion = direccion1;
    this.telefono = telefono1;
  }
  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  } //SET ES PARA ALMACENAR
  setApellido() {}
  setDireccion() {}
  setTelefono() {}
  //GET
  getNombre() {
    return this.nombre;
  } // GET ES PARA EXTRAER/VISUALIZAR
  getApellido() {}
  getDireccion() {}

  informacion() {
    console.log(
      "datos de la persona" +
        this.nombre +
        this.apellido +
        this.direccion +
        this.telefono
    );
  }
}
let personita = new Persona(
  " Alejandro ",
  "Lopez ",
  " Keli con 20N ",
  " 0000000"
);
personita.informacion();
let Maria = new Persona(" Maria ", " Sanchez ", " cra 3 calle20N ", " 0000000");
Maria.informacion();
personita.nombre = " Raul ";
personita.informacion();

personita.setNombre("Raul")
consolepe.getNombre(personita.getNombre());

//realizar clase auto, teniendo en cuenta que tiene marca, modelo, año y color. crear un objeto para la marca Honda y para la marca Ferrari.