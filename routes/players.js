
const express = require("express");
const app = express();
// Cogemos modelo Player
const Player = require("../models/player");

// SELECT
app.get("/:team", (req, res) => {
    // Validación
    // Busco registro con 'find' identificado con su primer argumento
    Player.find({team: req.params.team})
        .then(function (players) {
            res.status(200).json({
                message: "OK",
                players
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: "Database error"
            })
        });
})

// INSERT
app.post("/", (req, res) => {
    // Validación, creamos en objeto con los valores de la petición HTTP
    let player = new Player({
        name: req.body.name,
        surname: req.body.surname,
        team: req.body.team
    });
    
    // Guarda el objeto en BD con 'save'
    (async () => {
        await player.save()
    })
  
    res.status(200).json({
        message: "OK",
        player
    })
})

// UPDATE
app.put("/:surname", (req, res) => {
    // Validación
    // Busco elemento y actualizo con 'findOneAndUpdate'; su primer argumento elemento a buscar y segundo cambio a poner
    Player.findOneAndUpdate({surname: req.params.surname}, req.body, {new: true})
        .then(function (playerUpdate) {
            res.status(200).json({
                message: "OK, actualizado",
                playerUpdate
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: "Database error"
            })
        });
})

// DELETE
app.delete("/:surname", (req, res) => {
    // Validación
    // Borro registro con 'deleteOne' identificado por su primer argumento
    Player.deleteOne({surname: req.params.surname})
        .then(function (playerDeleted) {
            res.status(200).json({
                message: "OK, borrado",
                playerDeleted
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: "Database error"
            })
        });
})

module.exports = app;





