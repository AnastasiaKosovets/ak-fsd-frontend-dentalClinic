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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
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
    checkError(e.target.name, e.target.value);
    console.log(e.target.value, "soy el check....");
  };
  
  const registerOn = () => {
    myRegister(credentials)
      .then((results) => {
        let decodificated = jwt_decode(results.data.token);

        setTimeout(() => {
          navigate("/");
        }, 3500);

        // setWelcome(`Bienvenid@ de nuevo ${decodificated.name}`);
        setWelcome(`Gracias por registrarte ${decodificated.name}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mainRegister">
      <div className="registerDesign">
        Regístrate y pide tú cita On-line
        {/* {<pre>{JSON.stringify(credentials, null,2)}</pre>} */}
        {welcome !== "" ? (
          <div>{welcome}</div>
        ) : (
          <div className="mainLogDesign">
            {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
            {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
            <InputText
              type={"text"}
              design={
                credentialsError.firstNameError === ""
                  ? "normalInput"
                  : "normalInput errorInput"
              }
              placeholder={"Introduce tu nombre"}
              name={"firstName"}
              // classDesign={"InputText"}
              functionHandler={InputHandler}
              onBlurFunction={inputCheck}
            />
            <div className="errorText">{credentialsError.firstNameError}</div>
            <InputText
              type={"text"}
              design={
                credentialsError.lastNameError === ""
                ? "normalInput"
                : "normalInput errorInput"
              }
              placeholder={"Introduce tú apellido"}
              name={"lastName"}
              // classDesign={"InputText"}
              functionHandler={InputHandler}
              onBlurFunction={inputCheck}
            />
            <div className="errorText">{credentialsError.lastNameError}</div>
            <InputText
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
            {/* <InputText
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
          <div className="errorText">{credentialsError.documentError}</div> */}
            {/* <InputText
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
          <div className="errorText">{credentialsError.documentError}</div> */}
            <div onClick={() => registerOn()} className="logInButton">
              Iniciar sesión
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
