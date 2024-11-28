class Canciones {
  titulo;
  artista;
  duracion;
  constructor(titulo, artista, duracion) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracion = duracion;
  }
  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getArtista() {
    return this.artista;
  }

  setArtista(artista) {
    this.artista = artista;
  }

  getDuracion() {
    return this.duracion;
  }

  setDuracion(duracion) {
    this.duracion = duracion;
  }

  mostrarInformacion() {
    console.log(
      "canción: " +
        this.titulo +
        ", artista: " +
        this.artista +
        ", duración: " +
        this.duracion
    );
  }
}

class Playlist {
  #Canciones;
  genero;
  nombre;
  constructor(genero, nombre) {
    this.#Canciones = [];
    this.nombre = nombre;
    this.genero = genero;
  }

  agregarCanciones(cancion) {
    if (cancion instanceof Canciones) {
      this.#Canciones.push(cancion);
      console.log("Canción agregada");
    } else {
      console.log("Solo se puede agregar instancias de la clase Canción");
    }
  }
  obtenerCanciones() {
    return this.#Canciones;
  }
  buscarCanciones(titulo) {
    const resultado = this.#Canciones.filter(
      (cancion) => cancion.titulo.toLowerCase() === titulo.toLowerCase()
    );
    return resultado;
  }
  listarCanciones() {
    this.#Canciones.forEach((cancion) => {
      cancion.mostrarInformacion();
    });
  }
}

let salsaPlaylist = new Playlist("Salsa", "Salsa Pesada");
document.querySelector("#playlistnombre").textContent = salsaPlaylist.nombre;
document.querySelector("#playlistgenero").textContent = salsaPlaylist.genero;

document.querySelector("#ok").addEventListener("click", function () {
  let tituloInput = document.querySelector("#titulo");
  let artistaInput = document.querySelector("#artista");
  let duracionInput = document.querySelector("#duracion");
  let titulovalue = tituloInput.value;
  let artistavalue = artistaInput.value;
  let duracionvalue = duracionInput.value;

  let cancioncita = new Canciones(titulovalue, artistavalue, duracionvalue); // Guardar la nueva canción en una variable
  salsaPlaylist.agregarCanciones(cancioncita);
  tituloInput.value = "";
  artistaInput.value = "";
  duracionInput.value = "";
});

document.querySelector("#mostrar").addEventListener("click", function () {
  let listaC = document.querySelector("#lista-canciones");

  listaC.innerHTML = "";

  salsaPlaylist.obtenerCanciones().forEach((cancion) => {
    let lista = document.createElement("li");
    lista.textContent = ` ${cancion.getTitulo()} - ${cancion.getArtista()} (${cancion.getDuracion()})`;
    listaC.appendChild(lista);
  });
});
