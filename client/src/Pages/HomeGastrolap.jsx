import React,{ useEffect, useState,  Fragment, useRef} from 'react';
import logo from "../Assets/logo.jpg";
import salert from 'sweetalert';
import axios from 'axios';
import CPacientes from '../Components/CPacientes';
import CConsentimientoInformado from '../Components/CConsentimientoInformado';
import CRegistroClinico from '../Components/CRegistroClinico';
//import CEspecialistas from '../Components/CEspecialistas';
//import CFecha from '../Components/CFecha';
//import CHora from '../Components/CHora';
//import CCita from '../Components/CCita';
//import CUsuarios from '../Components/CUsuarios';



const HomeGastrolap = () => {
    // REFERENCIAS
    const ListadoPacientes=useRef();
    const ConsentimientoInformado=useRef();
    const RegistroClinico=useRef();
    // DECLARACIONES DE VARIABLES
    let [DatosConsentimiento,setConsentimientoInformado]=useState([{
        ORDEN:'0'        
    }]);
    let [DatosRegistroClinico,setRegistroClinico]=useState([{
        ORDEN:'0'        
    }]);
    // DECLARACION DE FUNCIONES DE DATOS
    // ------------------LISTADO DE PACIENTES--------------------------------------------
    const [pacientes,setPacientes]=useState([]);    
    useEffect( ()=>{
        getPacientes()
    },[])
    const getPacientes = async () => {
        const response = await axios.get(`http://181.204.15.130:5000/api/pacientes`)
        setPacientes(response.data)        
    }
    const getPacientesAtender = () => {
        return (pacientes);
    }    
    //--------------------------------------------------------------------
    
    //-----BOTONES DE ACCIONES ---------------------------------------
    //----------------CONSENTIMIENTO INFORMADO------------------------
    const btnConsentimientoInformado_Click=(id) => {
        console.log("consentimiento:"+id);
        ListadoPacientes.current.className="d-none";
        ConsentimientoInformado.current.className="d-block";
        axios.get(`http://181.204.15.130:5000/api/consentimiento?orden=${id}`).then((response)=>{
            setConsentimientoInformado(response.data);                                    
        })
    }
    //----------------REGISTRO CLINICO  -----------------------
    const btnRegistroClinico_Click=(id) => {
        console.log("Registro:"+id);
        ListadoPacientes.current.className="d-none";
        RegistroClinico.current.className="d-block";        
        axios.get(`http://181.204.15.130:5000/api/consentimiento?orden=${id}`).then((response)=>{
            setRegistroClinico(response.data);                                    
        })
    }
    return ( 
        <Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-4 col-sm-5 mt-3 mb-3">
                            <img src={logo} className="mx-auto d-block img-fluid"/>
                       </div>
                       <div className="col-lg-5 col-sm-1"></div>

                       <div className="col-lg-3 col-sm-6 mt-3">
                            <nav className="navbar navbar-expand-xs navbar-light bg-light justify-content-end">
                                <div className="container-fluid">
                                    <a className="navbar-brand fs-6" href="#">Seleccione Opción</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <a className="nav-link fw-lighter fs-7" aria-current="page" href="/home"><i className="bi bi-file-earmark-person"></i> Pacientes para Estudios</a>                                            
                                            <hr className="dropdown-divider" />
                                            <a className="nav-link fw-lighter fs-7" href="/"><i className="bi bi-x-circle"></i> Cerrar Sesion</a>
                                        
                                        </div>
                                    </div>
                                </div>
                            </nav>
                       </div>
                   </div>
               </div>
               <div className="box-inicio">
                   <div className="container">
                        <p className="fw-lighter fs-6 text-end pt-2">SIM - Sistema Integrado Medico</p>
                   </div>                   
               </div>
               <div className="box-fin">
                   <div className="container">
                        <p className="fw-lighter fs-6">App Gastrolap</p>
                   </div>                  
               </div>
               {/*- CONTENIDO -*/}
               <div className="container pt-3 pb-3">
                    {/*-- LISTADO DE PACIENTES --*/}
                    <div className="d-block" ref={ListadoPacientes}>
                        <CPacientes datos={getPacientesAtender()} btnRegistroClinico={btnRegistroClinico_Click} btnConsentimientoInformado={btnConsentimientoInformado_Click}/>
                    </div>
                    
                    {/*-- CONSENTIMIENTO INFORMADO --*/}
                    <div className="d-none" ref={ConsentimientoInformado}>
                        <CConsentimientoInformado datos={DatosConsentimiento}/>
                    </div>

                    {/*-- REGISTRO CLINICO --*/}
                    <div className="d-none" ref={RegistroClinico}>
                        <CRegistroClinico datos={DatosRegistroClinico}/>
                    </div>

               </div>
               <div className="container">
                    <p className="text-center mt-3 mb-3">Plataforma para el Registro de Pacientes | 
                        <a href="https://ados-software.com/" target="_blank" > Diseñado por Ados Software.</a>
                    </p>
               </div>
        </Fragment>
    );
}
export default HomeGastrolap;