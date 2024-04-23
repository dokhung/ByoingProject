import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

const request = axios.create({
    baseURL:API_URL
})

request.interceptors.request.use(
    config =>{
        return config
    },
    error =>{
        console.log(error);
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    response =>{
        return response.data
    },

    error=>{
        console.log(error);
        return Promise.reject(error);
    }
);