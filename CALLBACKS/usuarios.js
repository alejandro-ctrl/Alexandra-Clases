const express = require("express");
const app = express();
const PORT = 6478;
app.use(express.json())

let usuario = [
  {
    id: 1,
    nombre: "Juan P",
  },
  {
    id: 2,
    nombre: "Patricia Fernandez",
  },
  {
    id: 3,
    nombre: "Carlos Romero",
  },
  {
    id: 4,
    nombre: "Alicia",
  },
];

function buscarUsuarioId(id) {
  let user = usuario.find((u) => u.id == id);
  if (!user) {
    console.log("usuario no encontrado");
  } else {
    console.log(user);
  }
}

function buscarUsuarioNombre(nombre) {
  let userN = usuario.find((u) => u.nombre == nombre);//también se puede poner forEach en vez de "find" para ir intercambiando
  if (!userN) {
    console.log("usuario no encontrado");
  } else {
    console.log(userN);
  }
}
function buscarUsuarioNombreID(id,nombre) {
  let userIdN = usuario.find((u) => u.id == id && u.nombre == nombre);
  if (!userIdN) {
    console.log("usuario no encontrado");
  } else {
    console.log(userIdN);
  }
}
//POST
app.post('/usuario', (req, res) => {
    let { id, nombre } = req.body
    buscarUsuarioNombreID(id, nombre, (resultado) => {
        res.json({ respuesta: resultado })
    })
});
//NOMBRE
app.get("/usuario/", (req, res) => {
  let nombre = req.query.nombre;
  buscarUsuarioNombre(nombre);
});

app.get("/usuario/:id", (req, res) => {
  let id = parseInt(req.params.id);
  buscarUsuarioId(id);
});

app.listen(PORT, () => {
  console.log("servidor corriendo en " + PORT);
});

// function saludo(msj, callback) {
//     console.log("hola"+ msj)
//     callback();

// }

// function hola() {
//     console.log("buenas tardes");
// }
// function adios() {
//     console.log("hasta luego");
// }
// saludo("buenas tardes", hola(error, saludo2))
