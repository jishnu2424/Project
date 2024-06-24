import axios from "axios";

const ApiRequest = axios.create({
    baseURL:"http://localhost:5000/",
    withCredentials:true,
})

export default ApiRequest