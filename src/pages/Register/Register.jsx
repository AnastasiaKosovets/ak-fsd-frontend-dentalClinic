import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Register.css";
// import { ChangeView } from "../../common/ChangeView/ChangeView";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { myRegister } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useState();

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

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
    firstNameError: "",
    lastNameError: "",
    documentError: "",
    dateOfBirthError: "",
    addressError: "",
    telefonNumberError: "",
    collegialNumberError: "",
  });

  const [welcome, setWelcome] = useState("");

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      //En este punto es donde el handler
      //asigna el valor a la propiedad adecuada....

      [e.target.name]: e.target.value,
    }));
  };

  const inputCheck = (e) => {
    let errorMessage = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: errorMessage,
    }));
    // checkError(e.target.name, e.target.value);
    // console.log(e.target.value, "soy el check....");

    const registerMeOn = () => {
      myRegister(credentials)
        .then((results) => {
          let decodificated = jwt_decode(results.data.token);

          setTimeout(() => {
            navigate("/");
          }, 3500);

          // setWelcome(`Bienvenid@ de nuevo ${decodificated.name}`);
          setWelcome(`Bienvenid@ de nuevo ${decodificated.name}`);
        })
        .catch((error) => console.log(error));
    };
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
        {/* <div className="registerForm">
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
        </div> */}
        {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div className="mainLogInDesign">
          {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
          {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}

          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Introduce tu e-mail"}
            name={"email"}
            functionHandler={InputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>
          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Introduce tu contraseña"}
            name={"password"}
            functionHandler={InputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>
          <InputText
              type={"text"}
              design={"normalInput"}
              placeholder={"Introduce tú nombre"}
              name={"firstName"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
            <InputText
              type={"text"}
              design={"normalInput"}
              placeholder={"Introduce tú apellido"}
              name={"lastName"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
            <InputText
            type={"text"}
            design={
              credentialsError.documentError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Introduce NIE/DNI"}
            name={"document"}
            functionHandler={InputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.documentError}</div>
          <div onClick={() => logInMe()} className="logInButton">
            Iniciar sesión
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
