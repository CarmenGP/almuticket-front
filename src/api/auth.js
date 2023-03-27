import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";

export default {
    register(name, surname, email, password) {
    const user = { name, surname, email, password };
    return axios.post('http://127.0.0.1:8000/api/auth/register', user);
    }
};