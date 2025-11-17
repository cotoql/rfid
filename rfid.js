const express = require('express');
const app = express();

app.get('/registrar', (req, res) => {
    const tag = req.query.tag;
    console.log("RFID recibido:", tag);
    res.send("Tag registrado: " + tag);
});

app.listen(3000, () => console.log("Servidor activo"));

