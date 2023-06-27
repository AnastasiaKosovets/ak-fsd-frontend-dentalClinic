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
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users/profile`, access);
    return res.data;
}

export const updateProfile = async (body, token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.put(`http://localhost:9000/users/profile`, body, access);
    return  res.data;
}

export const bringProducts = async (credentials) => {
    // return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
    return await axios.get(`http://localhost:9000/users`, credentials);
    // return await axios.get(`http://localhost:9000/treatments`);
}

export const getAppointmentsByAdmin = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments`, access);
    return res.data;
}

export const myAppointments = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments/myAppointments`, access);
    return res.data;
}