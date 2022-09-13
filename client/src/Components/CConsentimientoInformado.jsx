import React, { Fragment, useRef } from "react";
import { useState } from "react";
import firmaBlanco from "../Assets/firma.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SignaturePad from "react-signature-canvas";
import axios from "axios";
import salert from "sweetalert";

const CConsentimientoInformado = (props) => {
  const [firmaPaciente, setFirmaPaciente] = useState(firmaBlanco);
  const [firmaAcudiente, setFirmaAcudiente] = useState(firmaBlanco);
  const sigCanvas = useRef({});
  const limpiar = () => sigCanvas.current.clear();
  const guardarPaciente = () =>
    setFirmaPaciente(
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
    );
  const guardarAcudiente = () =>
    setFirmaAcudiente(
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
    );

  const aceptarTerminos = async () => {
    try {
      const datosConsentimiento = {
        id: 0,
        idOrden: props.datos[0].ORDEN,
        anestesiologo: document.getElementById("cboAnestesiologo").value,
        firmaPaciente: firmaPaciente,
        nombreAcudiente: document.getElementById("txtNombreAcudiente").value,
        identificacionAcudiente: document.getElementById(
          "txtIdentificacionAcudiente"
        ).value,
        firmaAcudiente: firmaAcudiente,
        estado: "A",
      };
      const res = await axios.post(
        "http://181.204.15.130:5000/api/consentimiento",
        datosConsentimiento
      );
      if (res.data.length == 0) {
        salert(
          "Error al Iniciar Sesión",
          "Verifique usuario y contraseña",
          "error"
        );
      } else {
        salert("Consentimiento Informado", "Datos Guardados", "success").then(
          (value) => {
            window.location.href = "/home";
          }
        );
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const noAceptarTerminos = async () => {
    try {
      const datosConsentimiento = {
        id: 0,
        idOrden: props.datos[0].ORDEN,
        anestesiologo: document.getElementById("cboAnestesiologo").value,
        firmaPaciente: firmaPaciente,
        nombreAcudiente: document.getElementById("txtNombreAcudiente").value,
        identificacionAcudiente: document.getElementById(
          "txtIdentificacionAcudiente"
        ).value,
        firmaAcudiente: firmaAcudiente,
        estado: "I",
      };
      const res = await axios.post(
        "http://181.204.15.130:5000/api/consentimiento",
        datosConsentimiento
      );
      if (res.data.length == 0) {
        salert(
          "Error al Iniciar Sesión",
          "Verifique usuario y contraseña",
          "error"
        );
      } else {
        salert(
          "Consentimiento Informado",
          "El Paciente NO Acepto los Terminos",
          "error"
        ).then((value) => {
          window.location.href = "/home";
        });
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="box-titulo ">
          <h1>Consentimiento Informado</h1>
        </div>
        <div className="box-form">
          <div className="row ms-3 me-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-muted"
            >
              GASTROLAP - Centro de Laparoendoscopia y Manejo de la Obesidad{" "}
            </label>
            <hr />
            <p className="fw-lighter fs-6 text-end">
              Orden No. {props.datos[0].ORDEN} Fecha: {props.datos[0].FECHA}
            </p>
            <h1 className="">Datos del Paciente</h1>
            <p className="fw-lighter fs-6">
              <strong>NOMBRE:</strong> {props.datos[0].NOMBRE} <br />
              <strong>DOCUMENTO DE IDENTIDAD:</strong>{" "}
              {props.datos[0].IDENTIFICACION} <br />
              <strong>FECHA DE NACIMIENTO:</strong>{" "}
              {props.datos[0].FECHA_NACIMIENTO} <strong>EDAD:</strong>{" "}
              {props.datos[0].EDAD} Años <strong>SEXO:</strong>{" "}
              {props.datos[0].SEXO} <br />
              <strong>PROCEDIMIENTO:</strong> {props.datos[0].ESTUDIO}{" "}
              <strong>
                <br />
                ENTIDAD:
              </strong>{" "}
              {props.datos[0].ENTIDAD}
            </p>
            <p className="text-center fs-3">Consentimiento Informado</p>
            <p className="fw-lighter fs-6  text-break">
              Por medio de la presente, en pleno uso de mis facultades, libre y
              voluntariamente, DECLARO QUE HE SIDO DEBIDAMENTE INFORMADO/A, en
              virtud de los derechos que marca la Ley de ética médica, y, en
              consecuencia, AUTORIZO al (los) Dr./a/res:{" "}
              <strong>
                {props.datos[0].ESPECIALISTA} - {props.datos[0].ESPECIALIDAD}
              </strong>
              .
            </p>

            <p className="fw-lighter fs-6 text-justify">
              Y a los asistentes de su elección en GASTROLAP IPS, para que me
              sea realizado el procedimiento diagnóstico y/o terapéutico
              denominado ENDOSCOPIA DIGESTIVA ALTA (PANENDOSCOPIA ORAL -
              ESOFAGOGASTRODUODENOSCOPIA- GASTROSCOPIA) / ENDOSCOPIA DIGESTIVA
              BAJA (COLONOSCOPIA - RECTOSCOPIA) / ENTEROSCOPIAS y aquellos
              procedimientos complementarios, tanto diagnósticos (biopsia,
              citología y otros), como terapéuticos (Polipectomia, dilatación,
              esclerosis, electro o fotocoagulación, colocación de bandas
              elásticas, prótesis, balones o sondas y otros), que sean
              aconsejables durante la misma. <br />
              <br />
              Consiento la administración de medicación sedante o de otro tipo
              (en inyección) que sea necesaria o aconsejable para la mejor
              realización del procedimiento.
              <br />
              <br />
              Se me han explicado y he comprendido los riesgos posibles de la
              exploración, que incluyen distensión de abdomen, dolor,
              hipotensión, flebitis, reacciones alérgicas locales y sistémicas,
              (anafilaxis) infección, aspiración bronquial, hemorragia,
              perforación, parada cardiorespiratoria y muerte. <br />
              <br />
              Algunas de estas complicaciones pueden requerir intervención
              quirúrgica. <br />
              <br />
              Se me ha informado que el procedimiento tiene posibilidades de
              falsos negativos descritos en la literatura médica universal.
              <br />
              <br />A raíz de la eventualidad relacionada con el nuevo
              coronavirus (covid 19) doy mi consentimiento para realización de
              los procedimientos endoscópicos a los que haya lugar en pleno
              conocimiento del alto riesgo de contagio para mí y para mi
              acompañante, que de manera detallada se me ha suministrado
              información completa, suficiente, con un lenguaje sencillo y
              claro. El profesional de la salud me ha explicado la naturaleza de
              la enfermedad, acerca del significado de caso sospechoso o
              confirmado del coronavirus COVID-19 en cuanto a su presentación
              clínica, modo de contagio, medidas para contenerla, posibilidad de
              sufrir la enfermedad, complicaciones o muerte, mientras permanezca
              como paciente y así mismo como acompañante del paciente.
            </p>
            <p className="fw-lighter fs-6 text-justify">
              Que he podido hacer las preguntas relacionadas con dicha
              enfermedad y se me han respondido en forma satisfactoria; así
              mismo se me ha explicado que voy a estar en riesgo de contagiarme
              mientras permanezca en la unidad. <br />
              <br />
              Así mismo autorizo al médico anestesiólogo:
              <select className="" id="cboAnestesiologo">
                <option value={"Dr. RUBEN DADIO CARRASQUILLA MELENDEZ"}>
                  {" "}
                  Dr. RUBEN DADIO CARRASQUILLA MELENDEZ
                </option>
                <option value={"Dr. ANTONIO JOSE OYOLA YEPES"}>
                  Dr. ANTONIO JOSE OYOLA YEPES
                </option>
              </select>
              a administrar los anestésicos que el considere necesario,
              reconociendo que hay riesgo para la vida y la salud asociados con
              la anestesia y tales riesgos me han sido explicados por el
              anestesiólogo. <br />
              <br />
              Dichos riesgos son: Confusión mental (temporal), nauseas - vomito,
              broncoaspiración, alergias, reacciones anafilácticas, accidente
              cerebrovascular, daño a las cuerdas vocales, despertarse durante
              la anestesia, arritmias cardiacas, parada cardiorespiratoria y
              muerte. <br />
              <br />
              He comprendido la naturaleza y propósito del procedimiento. Estoy
              satisfecho/a con la información que se me ha proporcionado
              (beneficios, riesgos, alternativas), y por ello DOY MI
              CONSENTIMIENTO para que se me practique el procedimiento. <br />
              <br />
              Para constancia firmo en Cartagena de Indias, a los{" "}
              {props.datos[0].DIA} días del mes {props.datos[0].MES} del Año{" "}
              {props.datos[0].AÑO}.
            </p>
            <div className="row">
              <div className="col-md-6">
                <p>Firma del Paciente</p>
                <img
                  src={firmaPaciente}
                  alt="Firma del Paciente"
                  style={{
                    display: "block",
                    border: "1px solid #CCCCCC",
                    width: "200px",
                    height: "100px",
                  }}
                />
                <p>
                  {props.datos[0].NOMBRE}
                  <br />
                  {props.datos[0].IDENTIFICACION}
                </p>

                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm ms-1 mt-1"
                    >
                      Firmar
                    </button>
                  }
                  closeOnDocumentClick={false}
                >
                  {(close) => (
                    <Fragment>
                      <p className="text-end">
                        <button
                          type="button"
                          className="btn btn-danger btn-sm ms-1 mt-1"
                          onClick={close}
                        >
                          Cerrar
                        </button>
                      </p>
                      <SignaturePad
                        ref={sigCanvas}
                        canvasProps={{
                          className: "signatureCanvas",
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ms-1 mt-1"
                        onClick={guardarPaciente}
                      >
                        Aceptar
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm ms-1 mt-1"
                        onClick={limpiar}
                      >
                        Limpiar
                      </button>
                    </Fragment>
                  )}
                </Popup>
              </div>
              <div className="col-md-6">
                <p>Firma del Acudiente</p>
                <img
                  src={firmaAcudiente}
                  alt="Firma del Paciente"
                  style={{
                    display: "block",
                    border: "1px solid #CCCCCC",
                    width: "200px",
                    height: "100px",
                  }}
                />
                <input
                  id="txtNombreAcudiente"
                  type="text"
                  placeholder="Nombre"
                />
                <br />
                <input
                  id="txtIdentificacionAcudiente"
                  type="text"
                  placeholder="Cedula"
                />
                <br />
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm ms-1 mt-1"
                    >
                      Firmar
                    </button>
                  }
                  closeOnDocumentClick={false}
                >
                  {(close) => (
                    <Fragment>
                      <p className="text-end">
                        <button
                          type="button"
                          className="btn btn-danger btn-sm ms-1 mt-1"
                          onClick={close}
                        >
                          Cerrar
                        </button>
                      </p>
                      <SignaturePad
                        ref={sigCanvas}
                        canvasProps={{
                          className: "signatureCanvas",
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ms-1 mt-1"
                        onClick={guardarAcudiente}
                      >
                        Aceptar
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm ms-1 mt-1"
                        onClick={limpiar}
                      >
                        Limpiar
                      </button>
                    </Fragment>
                  )}
                </Popup>
              </div>
              <div className="col-md-12">
                <br />
                <button
                  type="button"
                  className="btn btn-primary btn-sm ms-1 mt-1 form-control form-control-lg"
                  onClick={aceptarTerminos}
                >
                  Aceptar Terminos Consentimiento Informado
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm ms-1 mt-1 form-control form-control-lg"
                  onClick={noAceptarTerminos}
                >
                  No Acepto los Terminos Consentimiento Informado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CConsentimientoInformado;
