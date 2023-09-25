
// Importamos librería Monggose
const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    // Campos del modelo de datos con validaciones
    {
        name: {
            type: String,   
            required: true
        },
        surname: {
            type: String,
            required: true,
            unique: true
        },
        team: {
            type: String,
            enum: [
                "Real Madrid",
                "F.C Barcelona",
                "C.D Logroñes",
                "Málaga C.F"
            ]
        }  
    },
    {
        versionKey: false,   // Que no se versione el camp _id
        collection: 'players'    // la colección que se va a utilizar
    }
)

// Mando la instancia del modelo con su nombre "Player"
module.exports = mongoose.model('Player', PlayerSchema);







