import axios from "axios";

const REACT_APP_API_ENDPOINT_BASE_URL = "http://localhost:3000/";

const configuredAxios = axios.create({
    baseURL: REACT_APP_API_ENDPOINT_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
    mode: "cors",
});

configuredAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const Axios = configuredAxios;
