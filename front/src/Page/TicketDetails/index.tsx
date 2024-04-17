import { useEffect, useState } from "react";
import InputHistoricTickets from "../../components/InputHistoricTickets";
import TicketsDetailsData from "../../components/TicketsDetailsData";
import TimeLineTickets from "../../components/TimeLineTickets";
import { TicketDTO, TicketSimpleDTO } from "../../models/Ticket";
import { useParams } from "react-router-dom";
import * as ticketService from "../../services/ticket-service"


function TicketDetails() {

  const [ticket, setTicket] = useState<TicketSimpleDTO>();

  const params = useParams();

  useEffect(() => {
    ticketService.ticketById(Number(params.ticketId))
    .then((response) => {
      console.log(response.data);
      setTicket(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="app-container-content">
      <div className="base-card" style={{ marginBottom: "10px" }}>
        {ticket && <TicketsDetailsData ticket={ticket}/>}
      </div>
      <div className="base-card" style={{ marginBottom: "10px" }}>
        <TimeLineTickets />
      </div>
      <div className="base-card">
        <InputHistoricTickets />
      </div>
    </div>
  );
}

export default TicketDetails;
