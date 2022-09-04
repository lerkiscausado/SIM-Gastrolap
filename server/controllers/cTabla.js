const { json } = require("express");
const TablaModel = require("../models/mTabla");
//const Tabla = require("../models/mTabla");

// Tabla
module.exports.consultar = (req, res) => {         
    TablaModel.find()
    .then((response) => {        
        res.status(200).json(response);        

    })
    .catch((error) => {
        res.status(400).json(error);
    })
};
const guardar = async ()=>{
    const persona = new TablaModel({
        identificacion: 1234,
        nombre:"prueba",
        direccion: "prueba",
        telefono: 1234,
        correo: "prueba",
        user: "admin",
        pass:"1234",
        rol
    })
    const restultao = await persona.save()
    console.log(resultado)
}
