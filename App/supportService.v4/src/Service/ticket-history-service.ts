import { AxiosRequestConfig } from "axios";
import { TicketHistoryDTO } from "../models/ticketHistoryDTO";
import { requestBackendConfig } from "../utils/apiService";

export function addTicketHistoryNote(obj: TicketHistoryDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/ticketHistory/addHistory",
    withCredentials: true,
    data: obj,
  };
  return requestBackendConfig(config);
}
