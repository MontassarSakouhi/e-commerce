import axios from "axios";

const REACT_APP_API_ENDPOINT_BASE_URL =
    "http://localhost:3000/";

const axiosConfig = {
    mode: "cors",
    baseURL: REACT_APP_API_ENDPOINT_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
};

const configuredAxios = axios.create(axiosConfig);

export const Axios = configuredAxios;
