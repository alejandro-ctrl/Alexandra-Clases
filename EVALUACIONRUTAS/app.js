const evaluacionRouter = require ('./routes/evaluacionRoute');
const express = require ("express");
const dotenv = require ("dotenv")

dotenv.config();
const app = express ();
const PORT = process.env.PORT;

app.use (express.json());

app.use ('/api' , evaluacionRouter);

let startDB = async ()=> {
    try {
        app.listen (PORT, () => {
            console.log (`Servidor corriendo en http://localhost:${PORT}`);
        });        
    }
    catch (e) {
        console.log ('Error al conectar la base de datos')
    }
}

startDB ();