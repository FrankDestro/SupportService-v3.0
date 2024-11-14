import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function allTicketsRequest(
  page: number,
  id: string,
  registrationDate: string,
  status: string,
  area: string,
  categoryTicket: string,
  typeRequest: string,
  size = 12,
  sort = "registrationDate",
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/ticket/getTicketsByCriteria",
    params: {
      page,
      id,
      registrationDate,
      status,
      size,
      sort,
      area,
      categoryTicket,
      typeRequest,
    },
  };
  return requestBackendConfig(config);
}

export function ticketById(id: number) {
  return requestBackendConfig({ url: `/ticket/getTicketById/${id}` });
}
