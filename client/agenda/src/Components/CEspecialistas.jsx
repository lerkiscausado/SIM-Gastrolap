import React, {Fragment, useRef} from "react";

const CEspecialistas =(props) =>{    
    const cboEspecialista=useRef()
    const parametros=props;
    return(
        <Fragment>
            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Seleccione Medico Especialista</label>
            <select className="form-select" aria-label="Default select example" id="idEspecialista" ref={cboEspecialista} defaultValue={"default"}>
                <option value={"default"}  disabled className="text-muted" >Especialista</option>
                { parametros.datos.map ( (lista) => (
                    <option key ={ lista.id } value={ lista.id }>{ lista.especialista}</option>
                 ))}
            </select>            
        </Fragment>
    )

}
export default CEspecialistas;