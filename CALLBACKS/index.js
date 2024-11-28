const express = require("express");
const app = express();
const PORT = 8470;
app.use(express.json());

function sumaCallback(a, b, callback) {
  let resultado = a + b;
  callback(resultado);
}

app.get("/Suma", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  sumaCallback(a, b, (resultado) => {
    res.json({ respuesta: resultado });
  });
});

app.get("/Suma/:a/:b", (req, res) => {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);

  sumaCallback(a, b, (resultado) => {
    res.json({ respuesta: resultado });
  });
});

app.post("/Suma", (req, res) => {
  let { a, b } = req.body;
  sumaCallback(a, b, (resultado) => {
    res.json({ respuesta: resultado });
  });
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el port ${PORT}`);
});

// let usuarios = [{
//     id: 1, nombre: "Alicia", email: "alicialabandida@gmail.com"
// },
// {
//         id: 2, nombre: "Alicia", email: "alicialabandida@gmail.com"
//     },
//     {
//         id: 3, nombre: "Alicia", email: "alicialabandida@gmail.com"
//     },
//     {
//         id: 4, nombre: "Alicia", email: "alicialabandida@gmail.com"
//     },
//     {
//     id: 5, nombre: "Alicia", email: "alicialabandida@gmail.com"}
// ]
// function usuariosId() {
// }

// function mostrarResultado(resultado) {
//   console.log(resultado);
// }

// sumaCallback(2, 3, mostrarResultado);