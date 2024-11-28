const express = require("express");
const mysql = require("mysql2");//investigar como instalar la dependencia mysql 2
const app = express();
const PORT = 8470;
app.arguments(express.json());

//CONFIGURACION A LA BASE DE DATOS
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empleados",
});

app.listen(PORT, () => {
  console.log("puerto hola a todos" + PORT);
});

db.connect((err) => {
  if (err) {
    console.log("hay un error");
  } else {
    console.log("conectado");
  }
});


