import React, {useState} from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";
// import { ChangeView } from "../../common/ChangeView/ChangeView";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { logIn } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
// Instanciamos el useNavigate dentro de la constante
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: ""
  }) 

  const [welcome, setWelcome] = useState("");

  const InputHandler = (e) => {
    // Ahora procedemos a bindear(atar) los inputs mediante la presente
    // función handler a sus correspondientes estados del Hook, que se llama credentials

    setCredentials((prevState) => ({
        ...prevState,
        //En este punto es donde el handler 
        //asigna el valor a la propiedad adecuada....
        [e.target.name]: e.target.value,
      }));
  }

  const inputCheck = (e) => {

    let errorMessage = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: errorMessage,
    }));
    // checkError(e.target.name, e.target.value);
    // console.log(e.target.value, "soy el check....");
    // console.log(e.target.name, "soy el check.....");
  }

  const logInMe = () => {
    logIn(credentials)
    .then((results) => {
      let decodificated = jwt_decode(results.data.token);

      setTimeout(() => {
        navigate("/");
      }, 3500);

      setWelcome(`Bienvenid@ de nuevo ${decodificated.userName}`);
      // setWelcome(`Bienvenid@ de nuevo ${decodificated.name}`);
      // setWelcome('Bienvenid@ de nuevo', results.data);
      console.log(results);
    })
    .catch((error) => console.log(error));
  };


  return (
    <div className="mainLogin">
      <div className="loginDesign">Pide tu cita on-line
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

          <div onClick={() => logInMe()} className="logInButton">
            Iniciar sesión
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};
