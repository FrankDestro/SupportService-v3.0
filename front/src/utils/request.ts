import axios, { AxiosRequestConfig } from "axios";
import * as authService from "../services/auth-service";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: BASE_URL });
}

export function requestBackendConfig(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
      }
    : config.headers;

    
    console.log({
      ...config,
      baseURL: BASE_URL,
      headers,
    });


  return axios({ ...config, baseURL: BASE_URL, headers });
}
