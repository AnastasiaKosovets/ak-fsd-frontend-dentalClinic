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

// Book Appointment
export const bookAppointment = async (token, createAppointment) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.post(`http://localhost:9000/appointments`, createAppointment, access);
    return res;
}

// Delete Appointments
// export const deleteAppointment = async (appointmentId, token) => {
//     const access = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     await axios.delete(`http://localhost:9000/appointments/${appointmentId}`, access);
//   };

export const deleteAppointment = async (appointmentId) => {
    
    return await axios.delete(`http://localhost:9000/appointments/${appointmentId}`, appointmentId);
};

// Get all Doctors
export const getAllDoctors = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users/doctors`, access);
    return res.data.data;
}

// Get all Treatments
export const getAllTreatments = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/treatments`, access);
    return res.data.data;
}

// Get all Patients
export const getAllPatients = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users/patients`, access);
    return res.data;
}

// Get all Users by Admin
export const getAllUsersByAdmin = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/users`, access);
    return res.data;
}

// Get all Appointments by Admin
export const getAppointmentsByAdmin = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments`, access);
    return res.data;
}

// Get Appointments by User
export const myAppointments = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments/myAppointments`, access);
    return res.data;
}

// View of Doctor's Appointments 
export const doctorAppointments = async (token) => {
    let access = {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    };
    let res = await axios.get(`http://localhost:9000/appointments/doctorsAppointments`, access);
    return res.data;
}