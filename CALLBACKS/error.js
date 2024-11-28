const express = require("express");
const app = express();
const port = 6471;

app.use(express.json());
app.get("/error", (req, res) => {
  res.send("este es el primer get");
});
app.post("/error", (req, res) => {
  let { a, b } = req.body;
  let resultado = 0;
  try {
    if (b === 2
    
    ) {
      throw new Error("No se puede dividir entre 0");
    } else {
      resultado = a / b;
      res.json({ resultado });
    }
  } catch (error) {
      res.json({ error: "este es el error generado" });
      
    }
    
  res.json({ mensaje: "Este es el post" });
});

app.put("/error", (req, res) => {
  res.json({ mensaje: "Este es el put" });
});

app.dele, res) => {
  res.send("este es el delete");
});

app.get("/error/:id", (req, res) => {
  res.json({ msj: "Este es el segundo get" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http//localhost:${port}`);
});
