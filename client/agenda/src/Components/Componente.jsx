import React, { Fragment } from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';
import salert from 'sweetalert';


const Componente =({datos}) =>{       
    
    /*const [agenda, setAgenda]=useState([])
        useEffect( ()=>{
            getAgenda()
        });
    const getAgenda = async () => {
            const response = await axios.get(`http://localhost:5000/api/hora?fecha=${datos.fecha}&contrato=${datos.contrato}&especialista=${datos.especialista}`)
            if (response.data.length===0){
                salert(`no hay Citas Disponibles para esta fecha: ${datos.fecha} Selecione una Fecha Disponible`);
            } else{
                setAgenda(response.data)
            }
        }  */
    return(
        <Fragment>                       
                {
                    <p>{datos.contrato} {datos.especialista} {datos.fecha} </p>
                }
        </Fragment>
    )
}
export default Componente;