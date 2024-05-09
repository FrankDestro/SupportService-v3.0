import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InputHistoricTickets from "../../components/InputHistoricTickets";
import TicketsDetailsData from "../../components/TicketsDetailsData";
import TimeLineTickets from "../../components/TimeLineTickets";
import { TicketSimpleDTO } from "../../models/Ticket";
import * as ticketService from "../../services/ticket-service";


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
        <Link to="/tickets">
          <div className="col-md-1">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                style={{ marginRight: "8px" }}
              />
              Voltar
            </Button>
          </div>
        </Link>
        {ticket && <TicketsDetailsData ticket={ticket} />}
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
