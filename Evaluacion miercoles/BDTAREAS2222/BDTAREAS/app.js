const categoriaRouter=require('./routes/categoriaRoutes')
const tareaRouter = require('./routes/tareaRoutes');
const express = require  ("express");
const dotenv = require ("dotenv");
let sequelize = require ('./config/db');

dotenv.config();
const app = express ();
const PORT = process.env.PORT;

app.use (express.json());

app.use('/api', tareaRouter);
app.use("/api", categoriaRouter);

let startDB = async ()=> {
    try {
        await sequelize.sync();
        console.log ('Base de Datos sincronizada')
        app.listen (PORT, () => {
            console.log (`Servidor corriendo en http://localhost:${PORT}`);
        });        
    }
    catch (e) {
        console.log ('Error al conectar la base de datos')
    }
}

startDB ();



