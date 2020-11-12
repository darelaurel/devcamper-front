import axios from 'axios'

const api= axios.create({
 baseURL: process.env.VUE_APP_API,
 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

api.defaults.timeout = 10000;

api.interceptors.request.use(
    config => {
      const token = localStorage.getItem("dc-token");
      if (token) 
      {
        config.headers.common["Authorization"] = token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
export default api;

export * from "./modules/";