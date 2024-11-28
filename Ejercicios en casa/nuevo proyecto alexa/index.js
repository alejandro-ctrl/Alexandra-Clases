const express = require('express');
const app = express();
const PORT = 5300;
app.get('/elpapu', (req, res) => (
    res.json({mensaje:"este es un get"})
))

app.listen(PORT, () => (
    console.log(`El servidor está corriendo en el port ${PORT}`)
));

