import React, {Fragment, useRef} from "react";
import { useState } from "react";
import firmaBlanco from "../Assets/firma.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import SignaturePad from "react-signature-canvas"
import axios from 'axios';
import salert from 'sweetalert';

const CRegistroClinico =( props ) =>{    
    
    
    const GuardarRegistro =async() =>{
        try{
            const datosRegistro={
                id:0,
                idOrden:props.datos[0].ORDEN,
                //INFORMACION ESTUDIO O PROCEDIMIENTO
                MotReaPro: document.getElementById("txtMRP").value,
                HorUltAli: document.getElementById("txtHUA").value,
                Calificacion_Preparacion: document.getElementById("cboCalPre").value,
                //ANTECEDENTES PATOLOGICOS
                vih: document.getElementById("chkVih").checked,
                asma: document.getElementById("chkAsma").checked,
                diabetes: document.getElementById("chkDiabetes").checked, 
                cardiopatia: document.getElementById("chkCardiopatia").checked,
                protesis_valvular: document.getElementById("chkProtesisValvular").checked,
                protesis_articular: document.getElementById("chkProtesisArticular").checked,
                injerto_vascular: document.getElementById("chkInjertoVascular").checked,
                insuficiencia_renal: document.getElementById("chkInsuficienciaRenal").checked,
                hipertension_arterial: document.getElementById("chkHipertensionArterial").checked,
                ninguna: document.getElementById("chkNinguna").checked,
                apOtros: document.getElementById("txtapOtros").value,
                cirugias_previas: document.getElementById("cboCirugiasPrevias").value,
                apCual: document.getElementById("txtapCual").value,               
                //Permeabilidad Via Respiratoria
                apnea: document.getElementById("chkApnea").checked,
                dismorfia_facial: document.getElementById("chkDFacial").checked,
                aco: document.getElementById("chkACO").checked,
                anomalias_cuello: document.getElementById("chkACuello").checked,
                //Antecedentes Personales                
                antecedentes_medicamentos: document.getElementById("txtAntMed").value,
                //Antecedentes Alergicos
                aaMedicamentos: document.getElementById("cboAAMedicamentos").value,
                aamCual: document.getElementById("txtAAMCual").value,
                aaAnestesicos: document.getElementById("cboAAAnestesicos").value,
                aaaCual: document.getElementById("txtAAACual").value,
                aaDrogas: document.getElementById("cboAADrogas").value,
                aadCual: document.getElementById("txtAADCual").value,
                apap: document.getElementById("chkAPAP").checked,
                //ANTECEDENTES ENDOSCOPICOS
                aeEndoscopia_Previa: document.getElementById("cboaeEndoscopiaPrevia").value,
                aeepPorque: document.getElementById("txtaeepPorque").value,
                aeTolerancia: document.getElementById("cboaeTolerancia").value,
                aetPorque: document.getElementById("txtaetPorque").value,
                //EXPLORACION ENDOSCOPICA
                eeCon_Sedacion: document.getElementById("cboeeConSedacion").value,
                eeGrado_Sedacion: document.getElementById("txteeGradoSedacion").value,
                eeViaEV: document.getElementById("chkeeViaEV").checked,
                eeSuero_Terapia: document.getElementById("chkeeSueroTerapia").checked,
                eeGlucosado: document.getElementById("chkeeGlucosado").checked,
                eeSalino: document.getElementById("chkeeSalino").checked,
                eeOtros: document.getElementById("txteeOtros").value,
                eeVia_Aerea: document.getElementById("chkeeViaAerea").checked,
                eeCanula: document.getElementById("chkeeCanula").checked,
                eeVentury: document.getElementById("chkeeVentury").checked,
                eeMascara_Laringea: document.getElementById("chkeeMascaraLaringea").checked,
                eeOtros2: document.getElementById("txteeOtros2").value,
                //MEDICACION ADMINISTRADA
                maMidazolam: document.getElementById("txtmaMidazolam").value,
                maNBBH: document.getElementById("txtmaNBBH").value,
                maTramal: document.getElementById("txtmaTramal").value,
                maAntibiotico: document.getElementById("txtmaAntibiotico").value,
                maTrimebutina: document.getElementById("txtmaTrimebutina").value,
                maAtropina: document.getElementById("txtmaAtropina").value,
                maNalaxona: document.getElementById("txtmaNalaxona").value,
                maEfortil: document.getElementById("txtmaEfortil").value,
                maFlumazenil: document.getElementById("txtmaFlumazenil").value,
                //HEMODINAMICA DEL PACIENTE
                hpObservaciones: document.getElementById("txthpObservaciones").value,
                estado:"A"
            }
            const res = await axios.post('http://181.204.15.130:5000/api/registroclinico',datosRegistro);     
            if (res.data.length==0){
                salert("Error al Iniciar Sesión","Verifique usuario y contraseña","error");
            }else{
                salert("Registro Clinico","Datos Guardados","success").then((value) => { 
                    window.location.href = "/home"; 
                });                        
                console.log(res.data);
            }          
            //console.log(datosRegistro);
            
            
        }catch(error){
            console.log(error);
        }
    }
    return(
        <Fragment>
            <div className="container">
                <div className="box-titulo ">                        
                    <h1 >Registro Clinico de Pacientes</h1>                        
                </div>
                <div className="box-form">
                    <div className="row ms-3 me-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-muted">GASTROLAP - Centro de Laparoendoscopia y Manejo de la Obesidad </label>
                        <hr />
                        <p className="fw-lighter fs-6 text-end">Orden No. {props.datos[0].ORDEN} Fecha: {props.datos[0].FECHA}</p>
                        <h1 className="">Datos del Paciente</h1>
                        <hr />
                        {/*content*/}
                        <div className="row">
                            {/*-NOMBRE-*/}
                            <div className="col-lg-4 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Nombre</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].NOMBRE} readOnly />
                                </div>
                            </div>
                            {/*-IDENTIFICACION-*/}
                            <div className="col-lg-3 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Tipo y número de identificación</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].IDENTIFICACION} readOnly />
                                </div>
                            </div>        
                            {/*-SEXO-*/}                    
                            <div className="col-lg-1 col-sm-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Sexo</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].SEXO} readOnly />
                                </div>
                            </div>
                            {/*-EDAD-*/}                    
                            <div className="col-lg-2 col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Edad</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].EDAD} readOnly />
                                </div>
                            </div>
                            {/*-TELEFONO-*/}                    
                            <div className="col-lg-2 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Telefono</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].TELEFONO} readOnly />
                                </div>
                            </div>
                            {/*-DIRECCION-*/}                    
                            <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Dirección</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].DIRECCION} readOnly />
                                </div>
                            </div>
                            {/*-ENTIDAD-*/}                    
                            <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Entidad</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].ENTIDAD} readOnly />
                                </div>
                            </div>
                        </div>
                        
                        <h1 className="" >Informacion Estudio o Procedimiento</h1>
                        <hr />
                        <div className="row">
                            {/*-ESTUDIO-*/}                    
                            <div className="col-lg-8 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Procedimiento o Estudio a Realizar</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].ESTUDIO} readOnly />
                                </div>
                            </div>
                            {/*-MEDICO-*/}                    
                            <div className="col-lg-4 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Medico Tratante</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue={props.datos[0].ESPECIALISTA} readOnly />
                                </div>
                            </div>
                            {/*-MOTIVO PROCEDIMIENTO-*/}                    
                            <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Motivo de Realizacion del Procedimiento</label>
                                    <input id="txtMRP" type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-HORA ULTIMA COMIDA-*/}                    
                            <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Hora Ultimo Alimento Liquido/Solido </label>
                                    <input id="txtHUA"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-CALIFICACION PREPARACION-*/}                    
                            <div className="col-lg-3 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Calificación de la Preparación</label>
                                    <select id="cboCalPre"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="INADECUADA">INADECUADA</option>
                                        <option value="MALA">MALA</option>
                                        <option value="BUENA">BUENA</option>                                        
                                        <option value="EXCELENTE">EXCELENTE</option>
                                    </select>
                                </div>
                            </div>
                            <h1>Antecedentes Patologicos</h1>
                            <hr />
                            {/*-VIH-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkVih">VIH</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                            {/*-ASMA-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkAsma">ASMA</label>
                                    <input type="checkbox" className="form-check-input" id="chkAsma"/>                                    
                                </div>
                            </div>
                            {/*-DIABETES-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkDiabetes">DIABETES</label>
                                    <input type="checkbox" className="form-check-input" id="chkDiabetes"/>                                    
                                </div>
                            </div>
                            {/*-CARDIOPATIA-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkCardiopatia">CARDIOPATIA</label>
                                    <input type="checkbox" className="form-check-input" id="chkCardiopatia"/>                                    
                                </div>
                            </div>
                            {/*-PROTESIS VALVULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkProtesisValvular">PROTESIS VALVULAR</label>
                                    <input type="checkbox" className="form-check-input" id="chkProtesisValvular"/>                                    
                                </div>
                            </div>
                            {/*-PROTESIS ARTICULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkProtesisArticular">PROTESIS ARTICULAR</label>
                                    <input type="checkbox" className="form-check-input" id="chkProtesisArticular"/>                                    
                                </div>
                            </div>
                            {/*-INJERTO VASCULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkInjertoVascular">INJERTO VASCULAR</label>
                                    <input type="checkbox" className="form-check-input" id="chkInjertoVascular"/>                                    
                                </div>
                            </div>
                            {/*-INSUFICIENCIA RENAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkInsuficienciaRenal">INSUFICIENCIA RENAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkInsuficienciaRenal"/>                                    
                                </div>
                            </div>
                            {/*-HIPERTENSION ARTERIAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkHipertensionArterial">HIPERTENSION ARTERIAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkHipertensionArterial"/>                                    
                                </div>
                            </div>
                            {/*-NINGUNAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkNinguna">NINGUNA</label>
                                    <input type="checkbox" className="form-check-input" id="chkNinguna"/>                                    
                                </div>
                            </div>                            
                            {/*-OTROS-*/}                    
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">OTROS</label>
                                    <input id="txtapOtros"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-CIRUGIAS PREVIAS-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cirugias Previas</label>
                                    <select id="cboCirugiasPrevias" className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cual?</label>
                                    <input id="txtapCual"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                        </div>
                        <h1 className="" >Permeabilidad Via Respiratoria</h1>
                        <hr />
                        <div className="row">
                            {/*-APNEA DEL SUEÑO-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkApnea">APNEA DEL SUEÑO</label>
                                    <input type="checkbox" className="form-check-input" id="chkApnea"/>                                    
                                </div>
                            </div>
                            {/*-DISMORFIA FACIAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkDFacial">DISMORFIA FACIAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkDFacial"/>                                    
                                </div>
                            </div>
                            {/*-ANOMALIA DE CAVIDAD ORAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkACO">ANOMALIA DE CAVIDAD ORAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkACO"/>                                    
                                </div>
                            </div>
                            {/*-ANOMALIAS DEL CUELLO-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkACuello">ANOMALIAS DEL CUELLO</label>
                                    <input type="checkbox" className="form-check-input" id="chkACuello"/>                                    
                                </div>
                            </div>
                        </div>
                        <h1 className="" >Antecedentes Personales</h1>
                        <hr />
                        <div className="row">
                            {/*-ANTECEDENTES MEDICAMENTOSOS-*/}                    
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtAntMed" className="form-label text-muted">Antecedentes Medicamentos</label>
                                    <textarea id="txtAntMed"className="form-control"  rows="3"></textarea>
                                </div>
                            </div>
                            {/*-ANTECEDENTES ALERGICOS-*/}
                            <p>ANTECEDENTES ALERGICOS:</p>
                            {/*-MEDICAMENTOS-*/}                    
                            <div className="col-lg-3 col-sm-2">
                                <div className="mb-3">
                                    <label htmlFor="cboAAMedicamentos" className="form-label text-muted">Medicamentos</label>
                                    <select id="cboAAMedicamentos"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-lg-9 col-sm-10">
                                <div className="mb-3">
                                    <label htmlFor="txtAAMCual" className="form-label text-muted">Cual?</label>
                                    <input id="txtAAMCual" type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-ALERGIA A ANESTESICOS-*/}                    
                            <div className="col-lg-3 col-sm-2">
                                <div className="mb-3">
                                    <label htmlFor="ecboAAAnestesicos" className="form-label text-muted">Anestesicos</label>
                                    <select id="cboAAAnestesicos"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-lg-9 col-sm-10">
                                <div className="mb-3">
                                    <label htmlFor="etxtAAACual" className="form-label text-muted">Cual?</label>
                                    <input id="txtAAACual"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-DEPENDENCIA DE DROGAS-*/}                    
                            <div className="col-lg-3 col-sm-2">
                                <div className="mb-3">
                                    <label htmlFor="cboAADrogas" className="form-label text-muted">Drogas</label>
                                    <select id="cboAADrogas"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-lg-9 col-sm-10">
                                <div className="mb-3">
                                    <label htmlFor="txtAADCual" className="form-label text-muted">Cual?</label>
                                    <input id="txtAADCual"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-ANTECEDENTES DE PROBLEMAS EN ANESTESIAS PREVIAS-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkAPAP">ANTECEDENTES DE PROBLEMAS EN ANESTESIAS PREVIAS</label>
                                    <input type="checkbox" className="form-check-input" id="chkAPAP"/>                                    
                                </div>
                            </div>
                            {/*-ANTECEDENTES ALERGICOS-*/}
                            <p>ANTECEDENTES ENDOSCOPICOS</p>
                            {/*-ENDOSCOPIA PREVIA?-*/}                    
                            <div className="col-lg-3 col-sm-3">
                                <div className="mb-3">
                                    <label htmlFor="cboaeEndoscopiaPrevia" className="form-label text-muted">Endoscopia Previa?</label>
                                    <select id="cboaeEndoscopiaPrevia"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-PORQUE-*/}                    
                            <div className="col-lg-9 col-sm-9">
                                <div className="mb-3">
                                    <label htmlFor="txtaeepPorque" className="form-label text-muted">Porque?</label>
                                    <input id="txtaeepPorque"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-TOLERANCIA-*/}                    
                            <div className="col-lg-3 col-sm-3">
                                <div className="mb-3">
                                    <label htmlFor="cboaeTolerancia" className="form-label text-muted">Tolerancia</label>
                                    <select id="cboaeTolerancia"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="BUENA">BUENA</option>
                                        <option value="REGULAR">REGULAR</option>                                        
                                        <option value="MALA">MALA</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-PORQUE-*/}                    
                            <div className="col-lg-9 col-sm-9">
                                <div className="mb-3">
                                    <label htmlFor="txtaetPorque" className="form-label text-muted">Porque?</label>
                                    <input id="txtaetPorque"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-EXPLORACION ENDOSCOPICA-*/}
                            <p>EXPLORACION ENDOSCOPICA</p>
                            <div className="col-lg-3 col-sm-3">
                                <div className="mb-3">
                                    <label htmlFor="cboeeConSedacion" className="form-label text-muted">Con Sedacion</label>
                                    <select id="cboeeConSedacion"className="form-select form-select-sm" aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>                                                                                
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-9">
                                <div className="mb-3">
                                    <label htmlFor="txteeGradoSedacion" className="form-label text-muted">Grado de Sedacion</label>
                                    <input id="txteeGradoSedacion" type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeViaEV">VIA EV (SI/NO)</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeViaEV"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeSueroTerapia">SUERO TERAPIA</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeSueroTerapia"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeGlucosado">GLUCOSADO</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeGlucosado"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeSalino">SALINO</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeSalino"/>                                    
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txteeOtros" className="form-label text-muted">OTROS</label>
                                    <input id="txteeOtros"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeViaAerea">VIA AEREA (SI/NO)</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeViaAerea"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeCanula">CANULA</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeCanula"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeVentury">VENTURY</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeVentury"/>                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="chkeeMascaraLaringea">MASCARA LARINGEA</label>
                                    <input type="checkbox" className="form-check-input" id="chkeeMascaraLaringea"/>                                    
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txteeOtros2" className="form-label text-muted">OTROS</label>
                                    <input id="txteeOtros2"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <p>MEDICACION ADMINISTRADA</p>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaMidazolam" className="form-label text-muted">MIDAZOLAM - DOSIS</label>
                                    <input id="txtmaMidazolam"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaNBBH" className="form-label text-muted">N-BUTIL BROMURO DE HIOSCINA - DOSIS</label>
                                    <input id="txtmaNBBH"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaTramal" className="form-label text-muted">TRAMAL - DOSIS</label>
                                    <input id="txtmaTramal"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaAntibiotico" className="form-label text-muted">ANTIBIOTICO - DOSIS</label>
                                    <input id="txtmaAntibiotico" type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaTrimebutina" className="form-label text-muted">TRIMEBUTINA - DOSIS</label>
                                    <input id="txtmaTrimebutina"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaAtropina" className="form-label text-muted">ATROPINA - DOSIS</label>
                                    <input id="txtmaAtropina"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaNalaxona" className="form-label text-muted">NALAXONA - DOSIS</label>
                                    <input id="txtmaNalaxona"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaEfortil" className="form-label text-muted">EFORTIL - DOSIS</label>
                                    <input id="txtmaEfortil"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txtmaFlumazenil" className="form-label text-muted">FLUMAZENIL - DOSIS</label>
                                    <input id="txtmaFlumazenil"type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            
                        </div>
                        <h1 className="" >HEMODINAMICA  DEL PACIENTE</h1>
                        <hr />
                        <div className="row">
                            <div className="col-lg-12 col-sm-12">
                                <div className="mb-3">
                                    <label htmlFor="txthpObservaciones" className="form-label text-muted">Observaciones</label>
                                    <textarea id="txthpObservaciones"className="form-control"  rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <br/>
                                <button type="button" className="btn btn-primary btn-sm ms-1 mt-1 form-control form-control-lg " onClick={GuardarRegistro} >Guardar Datos Registro Clinico</button>
                                
                            </div>                            
                        </div>
                        
                        {/*fin content*/}
                    </div>
                </div>
            </div>
            
        </Fragment>
    )

}
export default CRegistroClinico;