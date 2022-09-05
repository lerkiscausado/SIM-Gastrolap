import React, { Fragment } from "react";


const CFecha =( {datos} ) =>{   
    //console.log(datos);
    return(
        <Fragment>
            <option disabled className="text-muted" value={"default"}>Fechas Disponibles</option>            
                {datos.map ( (todo) => (                
                    <option key={ todo.id } value={todo.id}>{ todo.fecha}</option>
                ))}
        </Fragment>
    )
    
}
export default CFecha;