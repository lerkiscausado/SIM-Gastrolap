import React, { Fragment, useState, useEffect, useRef } from "react";

import CTipoIdentificacion from '../Components/CTipoIdentificacion';
import axios from 'axios';



const CCita =( props ) =>{   
    const txtNumeroIdentificacion=useRef();
    //txtNumeroIdentificacion.current.readOnly="true";
    //----------------------------------------------------
    const [TipoIdentificacion, setTipoIdentificacion] = useState([])
    useEffect( ()=>{
        getTipoIdentificacion()
    },[])
    const getTipoIdentificacion = async () => {
        const response = await axios.get(`http://localhost:5000/api/identificacion`)
        setTipoIdentificacion(response.data)        
    }
    const getIdentificacion = () => {
        return (TipoIdentificacion);
    }
    //-------------------------------------------------------
    
    //-------------------------------------------------------
    
    
    return(
        <Fragment>    
            
            { props.datos.map ( (todo) => (
                <div className="row" key={todo.id}>
                    <div className="col-md-7">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Entidad de Salud o EPS</label>
                            <input type="text" className="form-control"  defaultValue={todo.entidad} readOnly />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Medico Especialista</label>
                            <input type="text" className="form-control"  defaultValue={todo.especialista} readOnly />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Fecha de Cita </label>
                            <input type="text" className="form-control"  defaultValue={todo.fecha} readOnly />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Hora de Cita</label>
                            <input type="text" className="form-control"  defaultValue={todo.hora} readOnly />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Tipo de Atencion {"(Estudio o Consulta)"}</label>
                            <input type="text" className="form-control"  defaultValue={todo.estudio} readOnly />
                        </div>
                    </div>
                    <div className="col-md-12 sub-titulo mb-3 ms-3">
                        <h1 className="text-center">Información del Paciente</h1>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Tipo Identificacion</label>
                            <CTipoIdentificacion datos={TipoIdentificacion} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Numero de Identificacion</label>
                            <input type="number" className="form-control"  id="txtNumeroIdentificacion" ref={txtNumeroIdentificacion} />                                        
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">.</label>
                            <button 
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                                type="button"
                                className="btn btn-primary form-control" 
                                onClick={()=>props.btnCita(txtNumeroIdentificacion.current.value)} >
                                    Enviar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
    
}
export default CCita;