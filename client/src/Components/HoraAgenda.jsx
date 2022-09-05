import React, { Fragment } from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';
import salert from 'sweetalert';



const HoraAgenda =({ todos }) =>{   
    
    const [agenda, setAgenda]=useState([])
        useEffect( ()=>{
            getAgenda()
        },[]);
    const getAgenda = async () => {
            const response = await axios.get(`http://localhost:5000/api/hora?fecha=${todos.fecha}&contrato=${todos.contrato}&especialista=${todos.especialista}`)
            
                setAgenda(response.data)
        }    
    return(
        <Fragment>
            { agenda.map ( (lista) => (
                <tr>
                    <td>{lista.hora}</td>
                    <td>{lista.estudio}</td>
                    <td><button className="btn btn-primary">Asignar Cita</button></td>                
                </tr>           
            ))}            
        </Fragment>
    )
}
export default HoraAgenda;