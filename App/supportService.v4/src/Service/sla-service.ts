import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getAllSla() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/sla/getSlaConfig",
  };
  return requestBackendConfig(config);
}
