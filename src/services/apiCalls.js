import axios from 'axios';

export const logIn = async (body) => {
    let res = await axios.post('http://localhost:9000/auth/login', body)
    return res.data.token
    // return await axios.post(`http://localhost:9000/auth/login`, credentials);
}

export const myRegister = async (credentials) => {
    return await axios.post(`http://localhost:9000/auth/register`, credentials);
}

export const myProfile = async (token) => {
    let access = {
        headers: {
            Autorization: "Bearer" + token,
        }
    }
    return await axios.get(`http://localhost:9000/users/profile`, access);
}

export const bringProducts = async (credentials) => {
    // return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
    return await axios.get(`http://localhost:9000/users`, credentials);
    // return await axios.get(`http://localhost:9000/treatments`);
}

export const getAppointmentsByDoctor = async (token) => {
    return await axios.get(`http://localhost:9000/appointments`);
}