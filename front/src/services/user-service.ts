import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(`${BASE_URL}/users?size=12`);
}

export function findPageRequest(page : number, name : string, size = 12) {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: "/users",
      params: {
        page,
        size,
        name,
      },
    };
    return axios(config);
  }