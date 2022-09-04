const { json } = require("express");
const Persona = require("../models/mPersona");

//login
module.exports.login = (req, res) => {
    const { user,pass } = req.body;
    Persona.find({ 'login.user': user, 'login.pass':pass })
    .then((response) => {        
        res.status(200).json(response);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
    
};
//Consultar
module.exports.find_persona = (req, res) => {
    const { identificacion } = req.params;
    Persona.find({ identificacion: identificacion })
    .then((response) => {        
        res.status(200).json(response);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
    
};
//GET
module.exports.get_persona = (req, res) => {
    Persona.find()
    .then((response) => {
        res.send(response);            
        console.log(response);
    })
    .catch((error) => {
        res.status(400).json({ error });        
    });    
};

//POST
module.exports.create_persona = (req, res) =>{
    const {identificacion, nombre, direccion, telefono, correo, user, pass, rol}=req.body;
    Persona.create({
        identificacion,
        nombre,
        direccion,
        telefono,
        correo,
        user, 
        pass,
        rol
    })
    .then((response)=>{
        res.status(200).json(response);
    })
    .catch((error)=>{
        res.status(400).json(error);
    });
}

//DELETE
module.exports.delete_persona = (req, res) => {
    const { id } = req.params;
    Persona.deleteOne({ _id: id })
    .then((response) => {
        res.status(200).json(response);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
};

//PATCH
module.exports.update_persona = (req, res) => {
    const { _id, documento, password } = req.body;
    Persona.updateOne({_id}, 
        {$set: {
        documento,
        password,
        },
    })
    .then((response) => {
    res.status(200).json(response);
    })
    .catch((error) => {
    res.status(400).json(error);
    })    
};