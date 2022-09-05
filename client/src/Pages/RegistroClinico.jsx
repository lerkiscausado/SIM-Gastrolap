import React, { Fragment } from "react";
import logo from "../Assets/logo_plataforma.jpg";


const RegistroClinico =( ) =>{   
    
    return(
        <Fragment>
            <div className="container">
                <div className="">
                    <div className="box-titulo ">                        
                        <h1 >Registro Clinico de Pacientes</h1>                        
                    </div>
                </div>
                <div className="box-form">
                    <div className="row">                        
                        <h1 className="">Datos del Paciente</h1>
                        <hr />                        
                        <div className="row">
                            {/*-NOMBRE-*/}
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Nombre</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="LERKIS ELIECER CAUSADO ESPITIA" readOnly />
                                </div>
                            </div>
                            {/*-IDENTIFICACION-*/}
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Tipo y número de identificación</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="CC9146310" readOnly />
                                </div>
                            </div>        
                            {/*-SEXO-*/}                    
                            <div className="col-md-1">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Sexo</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="M" readOnly />
                                </div>
                            </div>
                            {/*-EDAD-*/}                    
                            <div className="col-md-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Edad</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="42 Años" readOnly />
                                </div>
                            </div>
                            {/*-TELEFONO-*/}                    
                            <div className="col-md-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Telefono</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="3175035033" readOnly />
                                </div>
                            </div>
                            {/*-DIRECCION-*/}                    
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Dirección</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="Barrio Rep. de Chile Manzana 25 Lote 1" readOnly />
                                </div>
                            </div>
                            {/*-ENTIDAD-*/}                    
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Entidad</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="SALUD TOTAL EPS" readOnly />
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="row">                        
                        <h1 className="" >Informacion Estudio o Procedimiento</h1>
                        <hr />
                        <div className="row">
                            {/*-ESTUDIO-*/}                    
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Procedimiento o Estudio a Realizar</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="COLONOSCOPIA TOTAL" readOnly />
                                </div>
                            </div>
                            {/*-MEDICO-*/}                    
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Medico Tratante</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="DR JAIME BONFANTE" readOnly />
                                </div>
                            </div>
                            {/*-MOTIVO PROCEDIMIENTO-*/}                    
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Motivo de Realizacion del Procedimiento</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-HORA ULTIMA COMIDA-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Hora Ultimo Alimento Liquido/Solido </label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-CALIFICACION PREPARACION-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Calificación de la Preparación</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="1">INADECUADA</option>
                                        <option value="2">MALA</option>
                                        <option value="3">BUENA</option>                                        
                                        <option value="4">EXCELENTE</option>
                                    </select>
                                </div>
                            </div>
                            <h1>Antecedentes Patologicos</h1>
                            <hr />
                            {/*-VIH-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkVih">VIH</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                            {/*-ASMA-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkAsma">ASMA</label>
                                    <input type="checkbox" className="form-check-input" id="chkAsma"/>                                    
                                </div>
                            </div>
                            {/*-DIABETES-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">DIABETES</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-CARDIOPATIA-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">CARDIOPATIA</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-PROTESIS VALVULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">PROTESIS VALVULAR</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-PROTESIS ARTICULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">PROTESIS ARTICULAR</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-INJERTO VASCULAR-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">INJERTO VASCULAR</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-INSUFICIENCIA RENAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">INSUFICIENCIA RENAL</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-HIPERTENSION ARTERIAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">HIPERTENSION ARTERIAL</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>
                            {/*-NINGUNAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="exampleCheck1">NINGUNA</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>                                    
                                </div>
                            </div>                            
                            {/*-OTROS-*/}                    
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">OTROS</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>                            
                            {/*-CIRUGIAS PREVIAS-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cirugias Previas</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="2">NO</option>
                                        <option value="1">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cual?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <h1 className="" >Permeabilidad Via Respiratoria</h1>
                        <hr />
                        <div className="row">
                            {/*-APNEA DEL SUEÑO-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkVih">APNEA DEL SUEÑO</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                            {/*-DISMORFIA FACIAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkVih">DISMORFIA FACIAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                            {/*-ANOMALIA DE CAVIDAD ORAL-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkVih">ANOMALIA DE CAVIDAD ORAL</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                            {/*-ANOMALIAS DEL CUELLO-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkVih">ANOMALIAS DEL CUELLO</label>
                                    <input type="checkbox" className="form-check-input" id="chkVih"/>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1 className="" >Antecedentes Personales</h1>
                        <hr />
                        <div className="row">
                            {/*-ANTECEDENTES MEDICAMENTOSOS-*/}                    
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Antecedentes Medicamentos</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            {/*-ANTECEDENTES ALERGICOS-*/}
                            <p>ANTECEDENTES ALERGICOS:</p>
                            {/*-MEDICAMENTOS-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Medicamentos</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="2">NO</option>
                                        <option value="1">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cual?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-ALERGIA A ANESTESICOS-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Alergia a Anestesicos</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="2">NO</option>
                                        <option value="1">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cual?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-DEPENDENCIA DE DROGAS-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Dependencia de Drogas</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="2">NO</option>
                                        <option value="1">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-CUAL-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Cual?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-ANTECEDENTES DE PROBLEMAS EN ANESTESIAS PREVIAS-*/}                    
                            <div className="col-auto">
                                <div className="mb-3 form-check">
                                    <label class="form-check-label" for="chkAPAP">ANTECEDENTES DE PROBLEMAS EN ANESTESIAS PREVIAS</label>
                                    <input type="checkbox" className="form-check-input" id="chkAPAP"/>                                    
                                </div>
                            </div>
                            {/*-ANTECEDENTES ALERGICOS-*/}
                            <p>ANTECEDENTES ENDOSCOPICOS</p>
                            {/*-ENDOSCOPIA PREVIA?-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Endoscopia Previa?</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="2">NO</option>
                                        <option value="1">SI</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-PORQUE-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Porque?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>
                            {/*-TOLERANCIA-*/}                    
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Tolerancia</label>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option value="1">BUENA</option>
                                        <option value="2">REGULAR</option>                                        
                                        <option value="3">MALA</option>                                        
                                    </select>
                                </div>
                            </div>
                            {/*-PORQUE-*/}                    
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Porque?</label>
                                    <input type="text" className="form-control form-control-sm"  defaultValue="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <h1 className="" >Exploración Endoscopica</h1>
                        <hr />
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>            
        </Fragment>
    )
    
}
export default RegistroClinico;