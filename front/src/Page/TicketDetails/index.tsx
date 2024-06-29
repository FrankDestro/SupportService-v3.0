import { Link } from "react-router-dom";
import InputHistoricTickets from "../../components/InputHistoricTickets";
import TicketsDetailsData from "../../components/TicketsDetailsData";
import { TicketSimpleDTO } from "../../models/Ticket";
import Home from "../Home";

type Props = {
  ticket: TicketSimpleDTO | null;
};

function TicketDetails({ ticket }: Props) {
  
  return (
    <>
      <div className="base-card" style={{ marginBottom: "10px" }}>
        <Link to="/tickets">
        </Link>
        {ticket && <TicketsDetailsData ticket={ticket} />}
      </div><div className="base-card" style={{ marginBottom: "10px" }}>
        {/* <TimeLineTickets /> */}
        <div className="container-timeline">
        <Home/>
        </div>
       
      </div><div className="base-card">
        <InputHistoricTickets />
      </div>
    </>
  );
}

export default TicketDetails;
