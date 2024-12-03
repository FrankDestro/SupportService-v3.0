import axios, { AxiosRequestConfig } from "axios";
import { requestBackend, requestBackendConfig } from "../utils/request";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(`${BASE_URL}/users?size=12`);
}

export function findPageRequest(page: number, id: string, name: string, status: string, size = 12) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/users",
    params: {
      page,
      size,
      id,
      name,
      status
    },
  };
  return requestBackend(config);
}

export function findUserById(id: number) {
  return requestBackendConfig({ url: `/users/${id}` })
}

