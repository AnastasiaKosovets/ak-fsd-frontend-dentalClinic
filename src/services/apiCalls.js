import axios from 'axios';

export const logIn = async (credentials) => {
    return await axios.post(`http://localhost:9000/auth/login`, credentials);
}

export const myRegister = async (credentials) => {
    return await axios.post(`http://localhost:9000/auth/register`, credentials);
}

export const myProfile = async (credentials) => {
    return await axios.get(`http://localhost:9000/users/profile`, credentials);
}

export const bringProducts = async (credentials) => {
    // return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
    return await axios.get(`http://localhost:9000/users`, credentials);
    // return await axios.get(`http://localhost:9000/treatments`);
}

export const getAppointmentsByDoctor = async (credentials) => {
    return await axios.get(`http://localhost:9000/appointments`, credentials)
}