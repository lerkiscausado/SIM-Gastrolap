import React, { Fragment } from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';
import salert from 'sweetalert';



const FechaAgenda =({ todos }) =>{   
    /*const [agenda, setAgenda]=useState([])
        useEffect( ()=>{
            const getAgenda = async () => {
                const response = await axios.get(`http://localhost:5000/api/agenda?fecha=${todos.fecha}&contrato=${todos.contrato}&especialista=${todos.especialista}`)
                console.log('Numeros de Registros por Fecha: '+response.data.length);
                console.log(response.data);
                setAgenda(response.data);                
            }
            getAgenda();
        },[]);*/
        
    //-----------------------------------------------
    const getAgenda = async () =>{
        const response = await axios.get(`http://localhost:5000/api/agenda?fecha=${todos.fecha}&contrato=${todos.contrato}&especialista=${todos.especialista}`)
        if (response.data.length>0){
            return(
                <Fragment>
                    <option selected  disabled className="text-muted" value="">Fechas Disponibles</option>            
                    {response.data.map ( (todo) => (                
                        <option key={ todo.fecha }>{ todo.fecha}</option>
                    ))}
                </Fragment>
            )
        }else{
            salert('Citas no Disponibles para esta fecha')

        }
    }
    getAgenda();
    //-----------------------------------------------
    //ListarFecha();
    //console.log(todos[0]);
    
    /*return(
        <Fragment>
            <option selected  disabled className="text-muted" value="">Fechas Disponibles</option>            
            {agenda.map ( (todo) => (                
                <option value={ todo.fecha }>{ todo.fecha}</option>
            ))}
        </Fragment>
    )*/
}
export default FechaAgenda;