import React, {Fragment} from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';

const Entidades =(props) =>{
    
    // Listar Entidades
    const [entidades, setEntidades] = useState([])
            useEffect( ()=>{
            getEntidades()
        },[])
    const getEntidades = async () => {
        const response = await axios.get(`http://localhost:5000/api/entidades`)
        setEntidades(response.data)
        //console.log(response.data);
    }
    return( 
        <Fragment>
            <select className="form-select" aria-label="Default select example" id="idEntidad" ref={props.ref}>
            <option selected  disabled className="text-muted" value="">Entidad o EPS</option>
            { entidades.map ( (entidad) => (
                    <option key={ entidad.id }>{ entidad.entidad}</option>
                 ))}   
            </select>
        </Fragment>                    
    )
}
export default Entidades;