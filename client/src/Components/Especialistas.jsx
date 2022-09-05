import React from "react";
import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

const Especialistas =() =>{
    // Litar Especialistas
    const [especialistas, setEspecialistas] = useState([])
            useEffect( ()=>{
            getEspecialistas()
        },[])
    const getEspecialistas = async () => {
        const response = await axios.get(`http://localhost:5000/api/especialistas`)
        setEspecialistas(response.data)
    }
    return(
        <Fragment>        
            <option selected disabled key="">Especialista</option>                
            { especialistas.map ( (especialista) => (
                <option key={ especialista.id }>{ especialista.especialista}</option>
            ))}                        
        </Fragment>
    )
}
export default Especialistas;