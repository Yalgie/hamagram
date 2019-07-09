import axios from 'axios';

export const checkAuth = async cb => {
    const res = await axios.post(`/api/v1/auth`);
    cb(res.data.authenticated);
}

export const login = async (cb, username, password) => {
    const res = await axios.post(`/api/v1/auth/login`, {
        username,
        password
    });
    cb(res.data.authenticated);
}

export const logout = async cb => {
    const res = await axios.post(`/api/v1/auth/logout`);
    cb(res.data.authenticated);
}