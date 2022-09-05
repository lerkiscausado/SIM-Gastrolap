import React,{ useEffect, useState, useRef, Fragment} from 'react';
//import area from "../assets/area.jpg";
import logo from "../Assets/logo.jpg";
import salert from 'sweetalert';
//import img1 from "../assets/img1.jpg";
//import img2 from "../assets/img2.jpg";
//import img3 from "../assets/img3.jpg";
//import Footer from '../Components/Footer';
import {Link} from "react-router-dom";
import axios from 'axios';
import Entidades from '../Components/Entidades';
import Especialistas from '../Components/Especialistas';
import FechaAgenda from '../Components/FechaAgenda';
import HoraAgenda from '../Components/HoraAgenda';
import Componente from '../Components/Componente';


    



const HomePage = () => {
   
    //const FechaActual=hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    
    
    const dtFecha=useRef();
    const cboContrato=useRef();
    const cboEspecialista=useRef();
    const cboFechaDisponible=useRef();
    
    const [datos, setDatos]=useState([{
        contrato:'0',
        especialista:'0',
        fecha:'0'
    }]);    
    
   const fechaAgenda= ()=>{       
        
        console.log('entro por fecha Agenda: '+ datos[datos.length-1].contrato);        
        if (datos[datos.length-1].contrato!=='0'){        
             return(<FechaAgenda todos={datos[datos.length-1]} />)
        }
   }
    //console.log(datos);
    
    //console.log(especialista);
    

    const onSubmitHandler = (e) =>{
        //e.preventDefault();
        const fecha = dtFecha.current.value;
        const contrato = cboContrato.current.value;
        const especialista = cboEspecialista.current.value;
        //----------------------
        
        //----------------------        
        //console.log('Consulta de Fecha: '+fecha +' '+ contrato + ' '+ especialista);
        if (contrato=== "" || especialista==="" || fecha==="") {        
            salert("Agendamiento de Citas","Debe seleccionar una Entidad, un Especialista y una Fecha Valida", "warning");
        }else{
           setDatos((prevDatos)=>{
                return [...prevDatos,{fecha:fecha,contrato:contrato,especialista:especialista}]
           });
           fechaAgenda();
        }
        
    };
    const onChangehandler =(e)=>{
        const fecha = cboFechaDisponible.current.value;
        const contrato = cboContrato.current.value;
        const especialista = cboEspecialista.current.value;        
        
        if (contrato=== "" || especialista==="" || fecha==="") {        
            salert("Debe seleccionar una Entidad, un Especialista y una fecha valida");
        }else{
           setDatos((prevDatos)=>{
                return [...prevDatos,{fecha:fecha,contrato:contrato,especialista:especialista}]
           });
        }
        //console.log('Consulta de Hora: '+fecha+ ' '+contrato+' '+especialista)
        //console.log(datos[datos.length-1])
    }
    
    return ( 
        <Fragment>
        
            {/* <!--Cabecera--> */}
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <img src={logo} className="mx-auto d-block img-fluid"/>
                    </div>
                </div>
                <div className="box-titulo ">                        
                        <h1 >ASIGNACIÓN DE CITAS</h1>                        
                </div>
                <div className="box-form">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Elige tu Entidad de salud</label>
                                    
                                        <Entidades ref={cboEspecialista}/>
                                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Seleccione Medico Especialista</label>
                                <select className="form-select" aria-label="Default select example"id="idEspecialista" ref={cboEspecialista}  >
                                    <Especialistas />
                                </select>
                                
                            </div>
                        </div>                            
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted" >
                                    Seleccione Fecha de Cita
                                </label>
                                <input type="date" className="form-select" placeholder="Fecha" id="fecha" ref={dtFecha} />                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted" >
                                 .
                                </label>
                                <button className="btn btn-primary form-control" onClick={onSubmitHandler}>Consultar Disponibilidad de Cita</button>                              
                                
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        
                        <div className="col-md-12 sub-titulo mb-3 ms-3">
                            <h1 className="text-center">Información de Citas</h1>
                        </div>
                        <div className="col-md-4">
                            
                                <div className="mb-3">                                    
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Fechas Disponibles</label>
                                    <select className="form-select" aria-label="Default select example" id="idFechaAgenda" ref={cboFechaDisponible} onChange={onChangehandler}>                                                            
                                        {fechaAgenda()}
                                        
                                    </select>
                                </div>
                            
                        </div>
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>HORAS </th>
                                        <th>CONSULTA O ESTUDIO</th>
                                        <th>FECHA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <HoraAgenda todos={datos[datos.length-1]} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>        
                < Componente datos={datos[datos.length-1]}/>
            </div>
        
        </Fragment>
    );
}
export default HomePage;