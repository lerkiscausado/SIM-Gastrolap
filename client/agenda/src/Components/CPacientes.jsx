import React, {Fragment, useRef} from "react";

const CPacientes =( props ) =>{    

    return(
        <Fragment>
            <div className="container">
                <div className="box-titulo ">                        
                    <h1 >Listado de Estudios Programados para Atención</h1>                        
                </div>
                <div className="box-form">
                    <div className="row table-responsive">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Pacientes Pendientes por Estudios </label>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ORDEN</th>
                                    <th>IDENTIFICACION</th>
                                    <th>PACIENTE</th>
                                    <th>ESTUDIO - CUPS</th>
                                    <th>ESPECIALISTA</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.datos.map ( (lista) => (                
                                    <tr key={lista.ORDEN}  id="idCitaValue">
                                        <td>{lista.ORDEN}</td>
                                        <td>{lista.IDENTIFICACION}</td>
                                        <td>{lista.NOMBRE}</td>
                                        <td>{lista.CUPS}</td>                
                                        <td>{lista.especialista}</td>
                                        <td>
                                            <button type="button" className="btn btn-outline-primary btn-sm ms-1 mt-1"  onClick={()=>{props.btnRegistroClinico(lista.ORDEN)}}title="Registro Clinico">
                                                <i className="bi bi-clipboard2-pulse" />
                                            </button> 
                                            <button type="button" className="btn btn-outline-success btn-sm ms-1 mt-1" onClick={()=>{props.btnConsentimientoInformado(lista.ORDEN)}}title="Consentimiento Informado">
                                                <i className="bi bi-journal-check" />
                                            </button>                                            
                                        </td>
                                    </tr>           
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )

}
export default CPacientes;