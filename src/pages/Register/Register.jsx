import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { myRegister } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

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
      //Here handler asign value to the property
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
    // console.log(e.target.value, "soy el check....");
  };

  const registerOn = () => {
    const { firstName, lastName, email, password } = credentials;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      credentialsError.firstNameError !== "" ||
      credentialsError.lastNameError !== "" ||
      credentialsError.emailError !== "" ||
      credentialsError.passwordError !== ""
    ) {
      return;
    } else {
      myRegister(credentials)
        .then((results) => {
          // console.log(data)
          setTimeout(() => {
            navigate("/");
          }, 2500);
          setWelcome("Gracias por registrarte");
          // console.log(results);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="mainRegister">
      <div className="registerDesign">
        Regístrate y pide tú cita On-line
        {welcome !== "" ? (
          <div>{welcome}</div>
        ) : (
          <div className="mainLogDesign">
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
              functionHandler={InputHandler}
              onBlurFunction={inputCheck}/>
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
              functionHandler={InputHandler}
              onBlurFunction={inputCheck}/>
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
              onBlurFunction={inputCheck}/>
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
              onBlurFunction={inputCheck}/>
            <div className="errorText">{credentialsError.passwordError}</div>

            <div onClick={() => registerOn()} className="logInButton">
              Regístrate
            </div>
            <div className="registerLinkText">
              ¿Ya tienes una cuenta?
              <Link to="/login" className="registerLink">
                ¡Inicia tu sesión!
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
