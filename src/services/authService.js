import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api"

export const authService = {
    getLogin(data) {
        return axios.post(baseUrl + '/login', data)
    },
    getRegister(data) {
        return axios.post(baseUrl + '/register', data)
    },
    getLogedOut() {
        return axios.post(baseUrl + '/logout')
    }
}