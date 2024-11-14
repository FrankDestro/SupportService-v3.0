import axios, { AxiosRequestConfig } from "axios";
import * as authService from "../Service/LoginService";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {
  return axios({ ...config, baseURL: BASE_URL });
}

export function requestBackendConfig(config: AxiosRequestConfig) {
  config.headers = {
    ...(config.headers || {}),
    Authorization: "Bearer " + authService.getAccessToken(),
  };
  return axios({ ...config, baseURL: BASE_URL, headers: config.headers });
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT
    return config;
  },
  function (error) {
    // DO SOMETHING WITH REQUEST ERROR
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
  },
  function (error) {
    if (error.response.status === 400) {
      //faz algo
    }
    if (error.response.status === 401) {
      // history.push("/login");
    }
    if (error.response.status === 403) {
      // history.push("/catalog");
    }
    return Promise.reject(error);
  }
);
