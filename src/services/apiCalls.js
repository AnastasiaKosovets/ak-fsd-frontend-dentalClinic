import axios from 'axios';

// Login
export const logIn = async (body) => {
    let res = await axios.post('http://localhost:9000/auth/login', body)
    return res.data.token
}

// Register
export const myRegister = async (credentials) => {
    return await axios.post(`http://localhost:9000/auth/register`, credentials);
}

// My Profile
export const myProfile = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users/profile`, access);
    return res.data;
}

// Update Perfil
export const updateProfile = async (body, token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.put(`http://localhost:9000/users/profile`, body, access);
    return  res.data;
}

// 
export const getAllUsersByAdmin = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users`, access);
    return res;
}

// View of all Appointments by Admin
export const getAppointmentsByAdmin = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments`, access);
    return res.data;
}

// View of Appointments by User
export const myAppointments = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments/myAppointments`, access);
    return res.data;
}