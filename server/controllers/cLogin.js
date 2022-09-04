const { json } = require("express");
const Con = require("conexion.js");
//const Persona = require("../models/mPersona");

//login

module.exports.login = (req, res) => {    
    var user= req.query.user;
    var pass=req.query.pass;
    Persona.find({ "login.user": user, "login.pass":pass})
    .then((response) => {        
        res.status(200).json(response);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
};