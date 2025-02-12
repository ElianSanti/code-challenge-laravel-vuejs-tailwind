import axios from 'axios';
import store from './store';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', 
});

axiosInstance.interceptors.request.use(
  config => {
    const token = store.getters.getToken; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;