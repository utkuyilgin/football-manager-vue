import axios from 'axios';
import { getToken } from './storage'

const API_HOST = 'http://localhost:8000/api';

export const instance = axios.create({
    baseURL: API_HOST || '/',
    timeout: 20000
})

instance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        (config.headers).Authorization = 'Bearer ' + token;
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
}, error => {
    return Promise.reject(error);
});

export const APIService = {
    get: (url, params) => instance.get(url, { params }),
    post: (url, params, options) => instance.post(url, params, options),
    put: (url, params) => instance.put(url, params),
    delete: (url, params) => instance.delete(url, { params }),
    head: (url, params) => instance.head(url, { params }),
    options: (url, params) => instance.options(url, { params }),
    patch: (url, params) => instance.patch(url, params)
};