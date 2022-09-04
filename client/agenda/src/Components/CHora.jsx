import React, { Fragment } from "react";


const CHora =( props ) =>{   
    
    //console.log(datos);
    
    return(
        <Fragment>            
            {props.datos.map ( (lista) => (                
                <tr key={lista.id}  id="idCitaValue">
                    <td>{lista.hora}</td>
                    <td>{lista.estudio}</td>
                    <td><button className="btn btn-primary" onClick={()=>{props.btnAsignarCita(lista.id)}}>Asignar Cita</button></td>                
                </tr>           
            ))}
        </Fragment>
    )
    
}
export default CHora;