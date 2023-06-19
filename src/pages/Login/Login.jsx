import React, {useState} from "react";
import "./Login.css";
// import { ChangeView } from "../../common/ChangeView/ChangeView";
import { InputText } from "../../common/InputText/InputText";
// import { checkError } from "../../services/useful";

export const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });


  const InputHandler = (e) => {

    setCredentials((prevState) => ({
        ...prevState,
        //En este punto es donde el handler 
        //asigna el valor a la propiedad adecuada....
        [e.target.name]: e.target.value,
        
      }));

  }

  const inputCheck = (e) => {

    checkError(e.target.name, e.target.value);

    console.log(e.target.value, "soy el check....");
    console.log(e.target.name, "soy el check.....");
    

  }


  return (
    <div className="mainLogin">
      <div className="loginDesign"> Accede a tu perfil
    {/* {<pre>{JSON.stringify(credentials, null,2)}</pre>} */}

      {/* <div className="navLogin">
        <ChangeView path={"/"} name={"Home"} />
        <ChangeView path={"/register"} name={"Register"} />
      </div> */}

      <div className="loginForm">
        <InputText 
            type={"email"}
            placeholder={"Introduce el email"}
            name={"email"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
            onBlurFunction={inputCheck}
        />
        <InputText 
            type={"password"}
            placeholder={"Introduce la contraseña"}
            name={"password"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
        />
      </div>
    </div>
    </div>
    
  );
};
