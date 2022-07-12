import axios from "axios";

axios.defaults.baseURL = "http://damianpawlikowski.eu.pythonanywhere.com/";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    switch (error.response.status) {
      case 400:
        break;
      case 401: {
        break;
      }
      case 422: {
        break;
      }
      default:
        console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axios;
