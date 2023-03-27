import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api/"

export const authService = {
    getLogin(data) {
        return axios.post(baseUrl + 'auth/login', data)
    },
    getRegister(data) {
        return axios.post(baseUrl + 'auth/register', data)
    },
    getLogedOut() {
        return axios.post(baseUrl + 'auth/logout')
    }
}