import React,{ useEffect, useState,  Fragment, useRef} from 'react';
//import area from "../assets/area.jpg";
import logo from "../Assets/logo.jpg";
import salert from 'sweetalert';
//import img1 from "../assets/img1.jpg";
//import img2 from "../assets/img2.jpg";
//import img3 from "../assets/img3.jpg";
//import Footer from '../Components/Footer';
//import {Link} from "react-router-dom";
import axios from 'axios';
//import Entidades from '../Components/Entidades';
//import Especialistas from '../Components/Especialistas';
//import FechaAgenda from '../Components/FechaAgenda';
//import HoraAgenda from '../Components/HoraAgenda';
//import Componente from '../Components/Componente';
import CContratos from '../Components/CContratos';
import CEspecialistas from '../Components/CEspecialistas';
import CFecha from '../Components/CFecha';
import CHora from '../Components/CHora';
import CCita from '../Components/CCita';
import CUsuarios from '../Components/CUsuarios';



const Home = () => {
    
    // Declaracion de Variables
    const frmModal=useRef();
    const frmRegistroCita=useRef();
    const frmPrincipal =useRef();
    const ResultadoConsulta=useRef();
    const cboFechaDisponible=useRef();
    //-------Referencias DatosUsuarios ---------------
    const txtPrimerNombre=useRef();
    const txtSegundoNombre=useRef();
    const txtPrimerApellido=useRef();
    const txtSegundoApellido=useRef();
    //-------------------------------------------
    let [DatosUsuarios,setDatosUsuarios]=useState([]);
    let [ResultadosFechasDisponibles,setResultadosFechasDisponibles]=useState([]);
    let [ResultadosHorasDisponibles,setResultadosHorasDisponibles]=useState([]);
    let [DatosCita,setDatosCita]=useState([]);

    //ResultadoConsulta.current.style.display="none";
    var estado=false;
    const [datos, setDatos]=useState([{
        contrato:'13',
        especialista:'5',
        fecha:'2021-01-01'
    }]);
    // Declaracion de Funciones
    //---------------------------------------------
    const [entidades, setEntidades] = useState([])
    useEffect( ()=>{
        getEntidades()
    },[])
    const getEntidades = async () => {
        const response = await axios.get(`http://localhost:5000/api/entidades`)
        setEntidades(response.data)        
    }
    const getContratos = () => {
        return (entidades);
    }
    //----------------------------------------------------
    const [especialistas, setEspecialistas] = useState([])
    useEffect( ()=>{
        getEspecialistas()
    },[])
    const getEspecialistas = async () => {
        const response = await axios.get(`http://localhost:5000/api/especialistas`)
        setEspecialistas(response.data)        
    }
    const getMedicoEspecialista = () => {
        return (especialistas);
    }
    //----------------------------------------------------
    const [fechaAgenda, setFechaAgenda] = useState([])
    useEffect( ()=>{
        getFechaAgenda()
    },[])
    const getFechaAgenda = async () => {
        const response = await axios.get(`http://localhost:5000/api/agenda?fecha=${datos[datos.length-1].fecha}&contrato=${datos[datos.length-1].contrato}&especialista=${datos[datos.length-1].especialista}`)
        setFechaAgenda(response.data)
        //console.log(response.data.length)        
    }
    const getFechaDisponible = () => {
        return (fechaAgenda);
    }
    //---------------------------------------------------
    
    //---------------------------------------------------
    const MostrarConsulta=() =>{
        if(estado===true){
            return(
                <Fragment>
                    <hr />
                    <p>prueba de renderizado</p>
                </Fragment>
            )
        }
    }
    //----------------------------------------------------
    const cboFecDis_onChange = () => {
        //let date=new Date();
        console.log(cboFechaDisponible.current.value);
        //--------HORAS DISPONIBLES -------
        axios.get(`http://localhost:5000/api/hora?fecha=${cboFechaDisponible.current.value}&contrato=${document.getElementById('idContrato').value}&especialista=${document.getElementById('idEspecialista').value}`).then((response)=>{
            setResultadosHorasDisponibles(response.data);
            console.log(response.data);
        })
    }
    //------ASIGNAR CITA----------------------------------
    const btnAsignarCita_Click=(id) => {
        //console.log('Id Cita:'+id);
        
        ResultadoConsulta.current.className="d-none";
        frmPrincipal.current.className="d-none";
        frmRegistroCita.current.className="d-block";
        //--------DATOS CITA -------
        axios.get(`http://localhost:5000/api/cita/${id}`).then((response)=>{
            setDatosCita(response.data);
            //console.log(response.data);
        })
    }
    //----------------------------------------------------
    const btnCita_Click=(id)=>{
        console.log(document.getElementById('idTipoIdentificacion').value + id);
        //-------CONSULTAR PACIENTE -------
        axios.get(`http://localhost:5000/api/persona?tipoidentificacion=${document.getElementById('idTipoIdentificacion').value}&identificacion=${id}`).then((response)=>{
            if(response.data.length===0){
                salert({
                    title: "Agendar Cita",
                    text: "El Paciente con Numero de Identificación: "+document.getElementById('idTipoIdentificacion').value+id+" no se encuentra Registrado!. ¿Desea Registrarlo?",
                    icon: "warning",
                    buttons: {
                        catch: {
                            text: "Aceptar",
                            value: "true",
                          },
                        defeat: {
                            text: "Cancelar",
                            value: "false",
                        }                        
                    }
                }).then((value)=>{
                    console.log(value);
                    if(value==="true"){
                        setDatosUsuarios([{
                            id:"0",
                            primer_nombre:null,
                        }]);
                        
                    }
                });
            }else{
                setDatosUsuarios(response.data);
                console.log(response.data);           
            }
        })
    }
    //----------------------------------------------------
    const Boton=(e)=>{
        let fecha = document.getElementById('dtFecha').value
        let contrato = document.getElementById('idContrato').value
        let especialista = document.getElementById('idEspecialista').value
        if (contrato=== "" || especialista==="" || fecha==="") {        
            salert("Debe seleccionar una Entidad, un Especialista y una fecha valida");
        }else{            
            
            //--------FECHAS DISPONIBLES -------
            axios.get(`http://localhost:5000/api/agenda?fecha=${document.getElementById('dtFecha').value}&contrato=${document.getElementById('idContrato').value}&especialista=${document.getElementById('idEspecialista').value}`).then((response)=>{
                if (response.data.length===0){
                    salert('true')
                    ResultadoConsulta.current.className="d-none";
                }else{
                    //salert('false')                    
                    ResultadoConsulta.current.className="d-block";
                    //console.log(ResultadoConsulta.current.className);
                    setResultadosFechasDisponibles(response.data);                    
                }
                
                console.log(ResultadosFechasDisponibles);
                //ResultadoConsulta();
            })
            //--------HORAS DISPONIBLES -------
            axios.get(`http://localhost:5000/api/hora?fecha=${document.getElementById('dtFecha').value}&contrato=${document.getElementById('idContrato').value}&especialista=${document.getElementById('idEspecialista').value}`).then((response)=>{
                if (response.data.length===0){
                    salert('No existen Citas Disponibles para la fecha Ingresada, Selecione una fecha Disponible')                    
                }else{
                    //salert('false')                                        
                    //console.log(ResultadoConsulta.current.className);
                    setResultadosHorasDisponibles(response.data);                    
                }
                
                //console.log(ResultadosFechasDisponibles);
                //ResultadoConsulta();
            })
            

        }
        fecha=null;
        contrato=null;
        especialista=null;
    }
    //------------------------------------------------------
    return ( 
        <Fragment>
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <img src={logo} className="mx-auto d-block img-fluid"/>
                        <h2 className="text-center mt-3 mb-3">Servicio de Agenda en Linea</h2>
                        <p className="text-center">Realiza fácilmente tu proceso de Agendamiento para Consultas y Estudios con GASTROLAP.
                        <br />¡Soluciones virtuales especialmente para ti!</p>
                    </div>
                </div>

                <div className="box-titulo ">                        
                        <h1 >ASIGNACIÓN DE CITAS</h1>                        
                </div>
                <div className="box-form">
                    {/*  --------Formulario Principal -----------*/}
                    <div className="d-block" ref={frmPrincipal}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <CContratos datos={getContratos()} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <CEspecialistas datos={getMedicoEspecialista()} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted" >
                                        Seleccione Fecha de Cita
                                    </label>
                                    <input type="date" className="form-select" placeholder="Fecha" id="dtFecha"  />                                
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted" >
                                    .
                                    </label>
                                <button className="btn btn-primary form-control" onClick={Boton}>Consultar Disponibilidad de Cita</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  --------Resultado Consulta -----------*/}                        
                    <div className="d-none" ref={ResultadoConsulta}>
                        <div className="row ">
                            <hr />
                            <div className="col-md-12 sub-titulo mb-3 ms-3">
                                <h1 className="text-center">Información Horarios de Citas</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">                                    
                                        <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Fechas Disponibles</label>
                                        <select className="form-select" aria-label="Default select example" id="idFechaAgenda" ref={cboFechaDisponible} onChange={cboFecDis_onChange} defaultValue={"default"}>                                                            
                                            <CFecha datos={ResultadosFechasDisponibles}/>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Horarios de Citas Disponibles</label>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>HORAS </th>
                                                <th>CONSULTA O ESTUDIO</th>
                                                <th>FECHA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <CHora datos={ResultadosHorasDisponibles} btnAsignarCita={btnAsignarCita_Click}/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    {/*  --------Registro de Cita -----------*/}                        
                    <div className="d-none" ref={frmRegistroCita}>
                        <div className="row ">
                            <div className="col-md-12 sub-titulo mb-3 ms-3">
                                <h1 className="text-center">Datos de Cita</h1>
                            </div>                            
                            <CCita datos={DatosCita} btnCita={btnCita_Click}/>                            
                        </div>
                    </div>
                    {/*------------Formulario de Usuario ------*/}
                    <div className="d-block">
                        <CUsuarios datos={DatosUsuarios}/>
                    </div>
                    {/*------------Ventana Modal ------*/}
                    <div className="d-none" ref={frmModal}>                    
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-3 mb-3">Plataforma de Agendamiento en Linea | 
                    <a href="https://ados-software.com/" target="_blank" > Diseñado por Ados Software.</a>
                </p>
            </div>    
        </Fragment>
    );
}
export default Home;