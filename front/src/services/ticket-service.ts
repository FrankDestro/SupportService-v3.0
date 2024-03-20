import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/request";

export function allTicketsRequest(page : number, id: string, registrationDate: string, status: string, 
                                  size = 12, sort = 'registrationDate') {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/ticket",
      params: {
        id,
        registrationDate,
        status,
        page,
        size,
        sort
      },
    };
    return requestBackendConfig(config);
  }

  export function ticketById (id: number) {
    return requestBackendConfig({ url : `/ticket/${id}` })
  }
