import React, { Fragment, useState } from "react";



const CTipoIdentificacion =(props) =>{   
   
  
    
    return(
        <Fragment>
            <select className="form-select" aria-label="Default select example" id="idTipoIdentificacion"  defaultValue={"default"}>
                <option disabled className="text-muted" value="default" >Tipo Identificacion</option>            
                    {props.datos.map ( (todo) => (                
                        <option key={ todo.id } value={todo.id}>{ todo.identificacion}</option>
                    ))}
            </select>
        </Fragment>
    )
    
}
export default CTipoIdentificacion;