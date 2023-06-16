import React, { useState } from "react";
import "./Register.css";
import { ChangeView } from "../../common/ChangeView/ChangeView";
import { InputText } from "../../common/InputText/InputText";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    document: "",
    dateOfBirth: "",
    address: "",
    telefonNumber: "",
    collegialNumber: "",
  });

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      //En este punto es donde el handler
      //asigna el valor a la propiedad adecuada....

      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="mainRegister">
      <div className="registerDesign">
        Regístrate y pide tú cita On-line
        {/* {<pre>{JSON.stringify(credentials, null,2)}</pre>} */}
        {/* <ChangeView 
                path={"/"}
                name={"Home"}
            />
            <ChangeView 
                path={"/login"}
                name={"Login"}
            /> */}
        <div className="registerForm">
          <div className="formTxt">
            {" "}
            Email:
            <InputText
              type={"email"}
              placeholder={"Introduce el email"}
              name={"email"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            {" "}
            Contraseña:
            <InputText
              type={"password"}
              placeholder={"Introduce la contraseña"}
              name={"password"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            {" "}
            Nombre:
            <InputText
              type={"text"}
              placeholder={"Introduce tú nombre"}
              name={"firstName"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Apellido:
            <InputText
              type={"text"}
              placeholder={"Introduce tú apellido"}
              name={"lastName"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Documento de identidad
            <InputText
              type={"text"}
              placeholder={"Introduce NIE/DNI"}
              name={"document"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Fecha de nacimiento
            <InputText
              type={"text"}
              placeholder={"Introduce la fecha del nacimiento"}
              name={"dateOfBirth"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Dirección:
            <InputText
              type={"text"}
              placeholder={"Introduce la dirección"}
              name={"address"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Teléfono móvil
            <InputText
              type={"text"}
              placeholder={"Introduce el número del teléfono"}
              name={"telefonNumber"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formTxt">
            Número de colegiado
            <InputText
              type={"integer"}
              placeholder={"Introduce tú número de colegiado"}
              name={"collegialNumber"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
