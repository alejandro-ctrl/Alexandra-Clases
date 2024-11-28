const express = require("express");
const app = express();
// const PORT = 6472;

app.use(express.json());
require("dotenv").config();
const port = process.env.PORT;

let empresa = [
  { nombre: "Temu", direccion: "carrera 4", telefono: 3012558445 },
  { nombre: "claro", direccion: "calle norte", telefono: 3012558445 },
  { nombre: "jumbo", direccion: "avenida principal", telefono: 3012558445 },
];

function buscarEmpresanombre(nombre, callback) {
  let empres = empresa.find((e) => e.nombre == nombre);
  if (!empres) {
    callback("Empresa no encontrada", null);
  } else {
    callback(null, empres);
  }
}
function listarDatos(callback) {
  callback(empresa);
}
app.get("/empresa", (req, res) => {
  listarDatos((resultado) => {
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      throw new Error("Arreglo vacio");
    }
  });
});

function crear(datos, callback) {
  let { nombre, direccion, telefono } = datos;
  let nuevaEmpresa = {
    nombre,
    direccion,
    telefono,
  };
  empresa.push(nuevaEmpresa);
  callback(nuevaEmpresa);
}
function actualizarDatos(name, datos, callback) {
  let valorE = empresa.find((emp) => emp.nombre == name);
  if (valorE) {
    valorE.nombre = datos.nombre;
    valorE.direccion = datos.direccion;
    valorE.telefono = datos.telefono;
    callback(valorE);
  }
}
app.put("/ejercicio/:name", (req, res) => {
  let { name } = req.params;
  let { nombre, direccion } = req.body;
  try {
    if (nombre || direccion || telefono) {
      actualizarDatos(name, { nombre, direccion }, (resultado) => {
        res.json(resultado);
      });
    } else {
      throw new Error("Error para actualizar los datos");
    }
  } catch (e) {
    next(e);
  }
});

app.get("/ejercicio/:nombre", (req, res) => {
  let nombre = req.params.nombre;
  buscarEmpresanombre(nombre, (msj, empresa) => {
    if (msj == "Empresa no encontrada") {
      res.json({ msj: msj });
    } else {
      res.json(empresa);
    }
  });
});
// app.get("/empresa", (req, res) => {
//   res.json(empresa);
// });

app.get("/ejercicio", (req, res) => {
  try {
    res.send("Aqui esta el get");
  } catch (error) {
    res.json({ error: "Error en la ruta get" });
  }
});

app.post("/ejercicio", (req, res) => {
  let { nombre, direccion, telefono } = req.body;
  try {
    if (nombre || direccion || telefono) {
      crear({ nombre, direccion, telefono }, (resultado) => {
        res.json(resultado);
      });
    } else {
      throw new error("Error en la generación de datos");
    }
  } catch (e) {
    next(e);
  }
});

app.put("/ejercicio", (req, res) => {
  try {
    res.send("Aqui esta el put");
  } catch (error) {
    res.json({ error: "Error en la ruta put" });
  }
});

function eliminarDatos(n, callback) {
  let registroEncontrado = empresa.find((emp) => emp.nombre == n);
  callback(registroEncontrado);
}
app.delete("/ejercicio:name", (req, res) => {
  let { name } = req.params;
  eliminarDatos(name, (resultado) => {
    res.json(resultado);
  });
});

app.use((req, res, next) => {
  res.json({ error: "ruta no encontrada 404" });
});

app.use((err, req, res, next) => {
  res.json({ error: "error en datos" });
});

app.listen(port, () => {
  console.log("Servidor corriendo ", port);
});
// app.listen(PORT, () => {
//   console.log("funcionando en" + PORT);
// });

//start es para que el archivo quede oculto y poder ejecutarlo como se hizo en la terminal
