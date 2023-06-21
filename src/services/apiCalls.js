import axios from 'axios';


export const bringProducts = async () => {
    // return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
    // return await axios.get(`http://localhost:9000/users`);
    // return await axios.get(`http://localhost:9000/treatments`);
}

export const logIn = async (credentials) => {
    return await axios.post(`http://localhost:9000/auth/login`, credentials);
}

export const myRegister = async (credentials) => {
    // console.log(credentials, "hola David");
    return await axios.post(`http://localhost:9000/auth/register`, credentials);
}