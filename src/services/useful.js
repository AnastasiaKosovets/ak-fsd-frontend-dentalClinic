export const checkError = (name, value) => {


    switch(name){

        case "email":
        case "e-mail":
        case "correo":

            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "E-mail no válido";
            }

                return "";

        case "password":
        case "contraseña":

            // if(value.length < 8){
            //     return "El password debe de tener 8 caracteres minimo";

            // }
            //     return "";
            if(!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]|;:'",.<>/?]).{8,}/.test(value)
            ){
                return "El password debe de tener 8 caracteres minimo";

            }
                return "";


        case "name":
            // console.log(name);
        

        break;

        default:
            console.log("Formato desconocido");
    }


}