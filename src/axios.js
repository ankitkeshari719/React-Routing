import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.request.use(
  request => {
    // Edit request config
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // Edit request config
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
