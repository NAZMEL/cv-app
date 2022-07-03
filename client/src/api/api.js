import axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:3000/api/',
    //baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export default instance;