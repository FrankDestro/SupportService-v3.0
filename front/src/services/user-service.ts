import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(`${BASE_URL}/users?size=12`);
}

export function findPageRequest(page : number, id : string, name : string , status : string , size = 12, ) {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: "/users",
      params: {
        page,
        size,
        id,
        name,
        status
      },
    };
    return axios(config);
  }