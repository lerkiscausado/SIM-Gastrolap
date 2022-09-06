const express  = require("express");
//const Json  = require("express");
//const cPersona = require("../controllers/cPersona");
//const cLogin = require("../controllers/cLogin");
//const pool = require('conexion.js');
//const cTabla = require("../controllers/cTabla");
const cApi = require("../controllers/cApi");

const router = express.Router();

//const router = Router();
router.use(express.json());

// rutas de persona
//router.get("/obtener-persona", cPersona.get_persona);
//router.post("/crear-persona", cPersona.create_persona);
//router.patch("/actualizar-persona", cPersona.update_persona);
//router.delete("/borrar-persona/:id", cPersona.delete_persona);
//router.get("/listar-persona/:identificacion",cPersona.find_persona);



// rutas de login
router.get("/login", cApi.Login);
router.get("/users", cApi.users);
router.get("/identificacion", cApi.TipoIdentificacion);
router.get("/persona", cApi.Persona);
router.get("/cita/:id", cApi.ConsultarAgenda);
router.get("/entidades", cApi.Entidades);
router.get("/pacientes", cApi.PacientesAtender);
router.get("/consentimiento", cApi.ConsentimientoInformado);
router.get("/especialistas", cApi.Especialistas);
router.get("/agenda", cApi.FechaDisponible);
router.get("/hora", cApi.HoraDisponible);
router.post("/especimenes", cApi.Especimenes);
router.post("/consentimiento", cApi.Consentimiento);
router.get("/usuariosvb", cApi.UsuariosVB);

// Rutas de Ejemplo Tabla
//router.get("/consultar",cTabla.consultar);
//router.post("/guardar",cTabla.guardar);

module.exports = router;