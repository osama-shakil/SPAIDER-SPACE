import axios from "axios";
import { getCookie } from "cookies-next";
// Add back-end url here
export const baseDomain = 'https://f1e7-185-232-234-253.ngrok-free.app';
 

export const axiosInstance = axios.create({
  baseURL: baseDomain,
});
const ResponseInterceptor = (response) => {
  return response;
};
const RequestInterceptor = (config) => {
  const token = getCookie("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 509;
  if (!expectedErrors) {
    return Promise.reject(error.response);
  } else {
    return Promise.reject(error.response);
  }
});
