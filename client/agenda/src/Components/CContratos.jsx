import React, {Fragment, useRef} from "react";

const CContratos =(props) =>{    
    const cboContrato=useRef()
    const parametros=props;
    return(
        <Fragment>
            <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Seleccione Entidad de Salud o EPS</label>
            <select className="form-select" aria-label="Default select example" id="idContrato" ref={cboContrato} defaultValue={"default"}>
                <option value={"default"}  disabled className="text-muted" >Entidad o EPS</option>
                { parametros.datos.map ( (entidad) => (
                    <option key={entidad.id} value={ entidad.id }>{ entidad.entidad}</option>
                 ))}
            </select>            
        </Fragment>
    )

}
export default CContratos;