import axios from 'axios';

const conection = axios.create({
  baseURL: 'http://127.0.0.1:8000'
});

export default conection;