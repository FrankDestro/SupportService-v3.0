import axios, { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(`${BASE_URL}/users?size=12`);
}

export function findAllUserByCriteria(
  page: number,
  id: string,
  name: string,
  status: string,
  size = 9
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/users/getAllUsers",
    params: {
      page,
      size,
      id,
      name,
      status,
    },
  };
  return requestBackendConfig(config);
}

export function findUserById(id: number) {
  return requestBackendConfig({ url: `/users/getUser/${id}` });
}
