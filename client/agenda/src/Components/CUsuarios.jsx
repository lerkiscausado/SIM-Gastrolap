import React, { Fragment } from "react";


const CUsuarios =( props ) =>{   
    
    //console.log(props.datos);
    
    return(
        <Fragment>            
            {props.datos.map( (todo)=>(
                <div className="row" key={todo.id}>
                    <hr />
                    <div className="row" >
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Primer Nombre</label>
                                <input type="text" className="form-control"  defaultValue={todo.primer_nombre} readOnly />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Segundo Nombre</label>
                                <input type="text" className="form-control"  defaultValue={todo.segundo_nombre} readOnly />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Primer Apellido</label>
                                <input type="text" className="form-control"  defaultValue={todo.primer_apellido} readOnly />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Segundo Apellido</label>
                                <input type="text" className="form-control"  defaultValue={todo.segundo_apellido} readOnly />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Fecha de Nac.</label>
                                <input type="text" className="form-control"  defaultValue={todo.fecha_nacimiento} readOnly />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Edad</label>
                                <input type="text" className="form-control"  defaultValue={todo.edad} readOnly />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Sexo</label>
                                <input type="text" className="form-control"  defaultValue={todo.sexo} readOnly />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Dirección Residencia</label>
                                <input type="text" className="form-control"  defaultValue={todo.direccion} readOnly />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Telefono</label>
                                <input type="text" className="form-control"  defaultValue={todo.telefono} readOnly />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Email</label>
                                <input type="text" className="form-control"  defaultValue={todo.email} readOnly />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-muted">.</label>
                                <button className="btn btn-danger form-control" >Confirmar Cita</button>
                            </div>                            
                        </div>
                    </div>
               </div>            
            ))}
        </Fragment>
    )
    
}
export default CUsuarios;