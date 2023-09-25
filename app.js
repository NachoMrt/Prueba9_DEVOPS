
const express = require("express");
// Importamos librería Monggose
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Hacemos conexión con BD Mongo
const mongoURI = "mongodb://127.0.0.1:27017/LalIga";
const options = {
    useNewUrlParser: true
}
mongoose.connect(mongoURI, options)    // Conectamos !!
    .then(() => console.log("Conectado a la BD 'La lIga'"))
    .then(err => console.log(err))

// Cogemos la rutas para Modelo Player
const players = require("./routes/players");

// MIDDLEWARE ----
app.use(express.json());
app.use("/jugadores", players);

// RUTAS ----
app.get("/", (req, res) => {  
    res.status(200).sendFile(__dirname + "/public/inicio.html")
})
app.get("/services", (req, res) => {  
    res.status(200).sendFile(__dirname + "/public/servicios.html")
})

// Levantamos el puerto
app.listen(port, () => {
    console.log("Servidor escuchando en puerto http://localhost:" + port);
})





