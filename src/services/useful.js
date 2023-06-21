export const checkError = (name, value) => {


    switch(name){

        case "firstName":

        if(value.length < 2){
            return "El nombre debe de tener mínimo 2 carácteres"
        }
        return "";

        case "lastName":

        if(value.length < 2){
            return "El apellido debe de tener mínimo 2 carácteres"
        }
        return "";

        case "email":

            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "E-mail no válido";
            }
            return "";

        case "password":

            // if(value.length < 8){
            //     return "El password debe de tener 8 caracteres minimo";

            // }
            //     return "";
            if(!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]|;:'",.<>/?]).{8,}/.test(value)
            ){
                return "El password debe de tener 8 caracteres minimo";

            }
                return "";

        case "document":
            if(!value.length < 8 && !/(?=(?:.*[A-Z]){1,2})/.test(value))
            {
                return "El documento debe de tener 8 caracteres minimo";
                }
                return "";


        case "name":
            // console.log(name);
        

        break;

        default:
            console.log("Formato desconocido");
    }
}