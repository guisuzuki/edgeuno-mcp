import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    return Promise.reject(error);
  },
);
