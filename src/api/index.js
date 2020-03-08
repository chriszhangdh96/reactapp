import axios from 'axios'

var service = axios.create({
    baseURL:"/hd",
    "content-type":"application/json",
    timeout:5000
})

service.interceptors.request.use((config)=>{
    return config;
})


service.interceptors.response.use((res)=>{
    return res.data;
})

export default service;