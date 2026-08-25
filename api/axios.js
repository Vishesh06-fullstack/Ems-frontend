import axios from "axios"

const baseURL = `${(import.meta.env.VITE_BASE_URL || "https://ems-backend-mern.onrender.com").replace(/\/$/, "")}/api`;

const api = axios.create({
    baseURL
});

//attach auth token to all netwrok request

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
} );

export default api;
