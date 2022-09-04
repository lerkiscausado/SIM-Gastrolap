const mongoose = require("mongoose");
const { Schema } = mongoose;

const tablaSchema= new Schema({
    identificacion: Number,
    nombre: String,
    direccion: String,
    telefono: Number,
    correo: String,
    user: String,
    pass: String,
    rol: String
});
//const Persona = mongoose.model("personas", personaSchema);
const TablaModel = mongoose.model("tablas",tablaSchema);
module.exports = TablaModel;