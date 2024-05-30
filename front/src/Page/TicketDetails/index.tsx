import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import InputHistoricTickets from "../../components/InputHistoricTickets";
import TicketsDetailsData from "../../components/TicketsDetailsData";
import TimeLineTickets from "../../components/TimeLineTickets";
import { TicketSimpleDTO } from "../../models/Ticket";

type Props = {
  ticket: TicketSimpleDTO | null;
};

function TicketDetails({ ticket }: Props) {

  return (
    <div className="app-container-content">
      <div className="base-card" style={{ marginBottom: "10px" }}>
        <Link to="/tickets">
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
