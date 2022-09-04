const { json } = require("express");
const mysql = require('mysql');
const config = {
    /*host: "localhost",
    user: "adossofn_admin",
    password: "80082552700ers",
    database:"SIMDB"*/
    
    //SERVER CITOPAT
    host: "181.204.15.130",
    user: "adossofn_admin",
    password: "80082552700ers",
    database:"simdb"
    
    //SERVER GASTROLAP
    /*host: "181.206.54.83",
    user: "adossofn_admin",
    password: "80082552700ers",
    database:"simdb"*/
    
};

//const conn = mysql.createConnection(config);

const pool = mysql.createPool(config);

module.exports.users = (req, res) => {
    //console.log("Hola Mundo prueba 2");
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);
    });
    
};
module.exports.TipoIdentificacion = (req, res) => {    
    pool.query('SELECT id, nombre_tipo_identificacion as identificacion FROM tipo_identificacion', (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);        
    });    
};
module.exports.Persona = (req, res) => {    
    let tipoIdentificacion = req.query.tipoidentificacion;
    let identificacion =req.query.identificacion;
    pool.query("SELECT id,CONCAT(id_tipo_identificacion,identificacion)AS identificacion, primer_nombre, "
    +"segundo_nombre,	primer_apellido,	segundo_apellido,	sexo,	date_format(fecha_nacimiento,'%d-%m-%Y') as fecha_nacimiento,"
    +"	TIMESTAMPDIFF(YEAR,fecha_nacimiento,CURDATE()) AS edad,	telefono,	direccion,	correo_electronico AS email "
    +"FROM usuarios 	WHERE id_tipo_identificacion='"+tipoIdentificacion+"' and identificacion='"+identificacion+"'", (error, result) => {
        if (error) throw error;     
            res.send(result);            
            //res.status(200).json(result[0].PRIMER_NOMBRE);        
    });    
};
module.exports.Entidades = (req, res) => {        
    pool.query("SELECT contratos.id AS id, 	entidades.nombre_entidad AS entidad FROM contratos "
	+"INNER JOIN entidades ON (entidades.codigo_entidad=contratos.codigo_entidad)", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);        
    });    
};
module.exports.Especialistas = (req, res) => {        
    pool.query("SELECT 	id,	nombre AS especialista FROM especialistas WHERE estado='A'", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);        
    });    
};

module.exports.FechaDisponible = (req, res) => {    
    /*var filtro={
        fecha: req.body.fecha,
        contrato: req.body.contrato,
        especialista: req.body.especialista
    }*/
    let fecha =req.query.fecha;
    let contrato =req.query.contrato
    let especialista =req.query.especialista
    pool.query("SELECT  date_format(fecha,'%Y-%m-%d') as id , date_format(fecha,'%d-%m-%Y') as fecha FROM agenda WHERE estado ='DISPONIBLE' AND fecha >= '"+fecha+"' AND " 
		+ "id_contrato='"+contrato+"' AND id_especialista ='"+especialista+"' GROUP BY fecha ORDER BY fecha ASC ", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result); 
            //console.log(result);     
    });    
};
module.exports.HoraDisponible = (req, res) => {    
    
    let fecha =req.query.fecha;
    let contrato =req.query.contrato
    let especialista =req.query.especialista
    pool.query("SELECT 	agenda.id,	DATE_FORMAT(agenda.hora,'%h:%i %p') AS hora , tipo_estudio.nombre_tipo_estudio AS estudio FROM agenda "
        +"INNER JOIN tipo_estudio ON (agenda.id_tipo_estudio=tipo_estudio.id) WHERE  agenda.estado ='DISPONIBLE' AND fecha = '"+fecha+"' AND " 
		+ "agenda.id_contrato='"+contrato+"' AND agenda.id_especialista ='"+especialista+"' ORDER BY agenda.hora ASC ", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result); 
            //console.log(result);     
    });    
};
module.exports.Especimenes = (req, res) => {
    var data={                        
            nombre: req.body.nombre,
            estado: req.body.estado
        }; 
    let query="INSERT INTO especimenes SET ?";
    pool.query(query,data, function(error, result) {
        if (error) {
            throw error;     
            //res.send(result).json(result);            
        }else{
            res.status(200).json(result);                    
        }
    });    
    console.log(data);
};
module.exports.ConsultarAgenda = (req, res) => {    
    //var id = req.query.id     
    pool.query("SELECT agenda.id, date_format(agenda.fecha,'%d-%m-%Y') as fecha, DATE_FORMAT(agenda.hora,'%h:%i %p') as hora, tipo_estudio.nombre_tipo_estudio AS estudio, " 
    +"contratos.nombre AS entidad,	especialistas.nombre AS especialista FROM agenda "
    +"INNER JOIN tipo_estudio ON (agenda.id_tipo_estudio=tipo_estudio.id) "
    +"INNER JOIN especialistas ON (agenda.id_especialista=especialistas.id) "
    +"INNER JOIN contratos ON (agenda.id_contrato=contratos.id) "
    +"WHERE agenda.id=?",[req.params.id], (error, result) => {
        if (error) throw error;     
            res.send(result);            
            //res.status(200).json(result[0].PRIMER_NOMBRE);        
    });    
};
module.exports.Login = (req, res) => {    
    let usuario = req.query.usuario;
    let password =req.query.password;
    pool.query("SELECT 	users.id AS id,	empleados.id AS id_empleado, empleados.nombre_empleado AS nombre " 
    +"FROM users INNER JOIN empleados ON (empleados.id=users.id_empleado) "
    +"WHERE users.usuario='"+ usuario +"' AND users.pass='"+password+"'", (error, result) => {
        if (error) throw error;     
            res.send(result);            
            //res.status(200).json(result[0].PRIMER_NOMBRE);        
    });    
};
module.exports.PacientesAtender = (req, res) => {        
    pool.query("SELECT detalle_orden.ID_ORDEN AS ORDEN,  ordenes.FECHA_INGRESO AS FECHA_INGRESO ,"
    +"CONCAT(usuarios.ID_TIPO_IDENTIFICACION,usuarios.IDENTIFICACION) AS IDENTIFICACION, "
    +"CONCAT(usuarios.PRIMER_NOMBRE,' ',usuarios.SEGUNDO_NOMBRE,' ',usuarios.PRIMER_APELLIDO,' ',usuarios.SEGUNDO_APELLIDO) AS NOMBRE , "
    +"tipo_estudio.NOMBRE_TIPO_ESTUDIO AS ESTUDIO ,	cups.`NOMBRE_CUPS` AS CUPS, especialistas.nombre AS especialista "
    +" FROM (((((((((detalle_orden 	JOIN ordenes ON ((detalle_orden.ID_ORDEN = ordenes.ID))) "
    +" JOIN tipo_estudio ON ((detalle_orden.ID_TIPO_ESTUDIO = tipo_estudio.ID))) "
    +" JOIN usuarios ON ((ordenes.ID_USUARIO = usuarios.ID))) "
    +" JOIN contratos ON ((ordenes.ID_CONTRATO = contratos.ID))) "
    +" JOIN empleados ON ((ordenes.ID_EMPLEADO = empleados.ID))) "
    +" JOIN entidades ON ((contratos.CODIGO_ENTIDAD = entidades.CODIGO_ENTIDAD))) "
    +" JOIN licencias ON ((contratos.ID_LICENCIA = licencias.ID))) "
    +" JOIN cups ON ((detalle_orden.`CODIGO_CUPS` = cups.`CODIGO_CUPS`))) "
    +" JOIN especialistas ON ((ordenes.id_empleado=especialistas.id_especialista))) "
    +" WHERE ((detalle_orden.id_tipo_estudio IN (10,11,12)) AND detalle_orden.estado='PENDIENTE') ", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);        
    });    
};
module.exports.ConsentimientoInformado = (req, res) => {    
    let orden = req.query.orden;    
    pool.query("SELECT 	ordenes.id AS ORDEN,date_format(NOW(),'%Y-%m-%d') as FECHA, CONCAT(usuarios.ID_TIPO_IDENTIFICACION,usuarios.IDENTIFICACION) AS IDENTIFICACION, "
    +"CONCAT(usuarios.PRIMER_NOMBRE,' ',usuarios.SEGUNDO_NOMBRE,' ',usuarios.PRIMER_APELLIDO,' ',usuarios.SEGUNDO_APELLIDO) AS NOMBRE, "
    +"usuarios.SEXO AS SEXO, date_format(usuarios.fecha_nacimiento,'%Y-%m-%d') as FECHA_NACIMIENTO,	TIMESTAMPDIFF(YEAR,usuarios.FECHA_NACIMIENTO,CURDATE()) AS EDAD, "
    +"usuarios.telefono AS TELEFONO,cups.nombre_cups AS ESTUDIO,contratos.nombre AS ENTIDAD, especialistas.nombre AS ESPECIALISTA, "
    +"especialistas.especialidad AS ESPECIALIDAD,date_format(NOW(),'%d') as DIA,date_format(NOW(),'%m') as MES,date_format(NOW(),'%Y') as AÑO FROM detalle_orden	INNER JOIN ordenes ON (detalle_orden.id_orden=ordenes.id) "
    +"INNER JOIN usuarios ON (ordenes.id_usuario=usuarios.id) INNER JOIN cups ON (detalle_orden.codigo_cups=cups.codigo_cups) "
    +"INNER JOIN contratos ON (ordenes.id_contrato=contratos.id) INNER JOIN especialistas ON (ordenes.id_empleado=especialistas.id_especialista) "
    +" WHERE detalle_orden.id_orden='"+ orden +"'", (error, result) => {
        if (error) throw error;     
            res.send(result);            
            //res.status(200).json(result[0].PRIMER_NOMBRE);        
    });    
};
module.exports.UsuariosVB = (req, res) => {        
    pool.query("SELECT id, CONCAT(id_tipo_identificacion,identificacion)AS identificacion,	"
    +"CONCAT(`usuarios`.`PRIMER_NOMBRE`,' ',`usuarios`.`SEGUNDO_NOMBRE`,' ',`usuarios`.`PRIMER_APELLIDO`,' ',`usuarios`.`SEGUNDO_APELLIDO`) AS nombre, "
    +"sexo,	fecha_nacimiento, TIMESTAMPDIFF(YEAR,fecha_nacimiento,CURDATE()) AS edad, telefono,	direccion FROM usuarios", (error, result) => {
        if (error) throw error;     
            //res.send(result).json(result);
            res.status(200).json(result);        
    });    
};