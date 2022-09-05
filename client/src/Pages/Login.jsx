import React,{ useEffect, useState,  Fragment, useRef} from 'react';
import logo from "../Assets/logo.jpg";
import salert from 'sweetalert';
import axios from 'axios';



const Login = () => {
    const txtUsuario=useRef();
    const txtPassword=useRef();

    

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const usuario = txtUsuario.current.value;
        const password = txtPassword.current.value;
        console.log(usuario +' ' +password);
        eventoLogin(usuario, password);
    };
    
    const eventoLogin = async(usuario, password) =>{
        try{
            const res = await axios({
                method: 'get',
                url: `http://181.204.15.130:5000/api/login?usuario=${usuario}&password=${password}`,
                responseType: 'json'        
            });     
            if (res.data.length==0){
                salert("este man no esta registrado");
            }else{
                //salert("bienvenido a Katastronk "+res.data[0].nombre);            
                window.location.href = "/home";            
                console.log(res.data);
            }
            
            
        }catch(error){
            console.log(error);
        }
    }
    
    //------------------------------------------------------
    return ( 
        <Fragment>
               <div className="container mt-5">                  
                <div className="row justify-content-md-center">
                    <div className="col-md-12 col-sm-12 col-xs-12 mb-4">
                        <img src={logo} className="mx-auto d-block img-fluid" width="220px"/>
                    </div>
                    <div className="col-md-4 col-sm-12  col-xs-12  ">
                        <div className="box-login pt-4 pb-3 ">
                        <h1 className="fw-normal fs-3 text-center">Iniciar Sesión</h1>
                        <p className="fw-lighter fs-5 text-center">Gastrolap IPS</p>
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Usuario</label>
                                    <input type="text" className="form-control form-control-lg"  placeholder="Usuario"  ref={txtUsuario}/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Contraseña</label>
                                    <input type="password" className="form-control form-control-lg" placeholder="Contraseña" ref={txtPassword}/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="mb-3 mt-3">                                    
                                    <button className="btn btn-outline-primary form-control form-control-lg" onClick={onSubmitHandler}>Iniciar Sesión</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               </div>
               
               <div className="container">
                    <p className="text-center mt-3 mb-3">Plataforma para el Registro de Pacientes | Diseñado por:  
                        <a href="https://ados-software.com/" target="_blank" > Ados Software.</a>
                    </p>
               </div>
        </Fragment>
    );
}
export default Login;