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
    <>
      <div className="base-card" style={{ marginBottom: "10px" }}>
        <Link to="/tickets">
        </Link>
      {ticket && <TicketsDetailsData ticket={ticket} />}
      </div><div className="base-card" style={{ marginBottom: "10px" }}>
                <div className="container-timeline">
 <TimeLineTickets/>
        </div>
       
      </div><div className="base-card">
        <InputHistoricTickets />
      </div>
    </>
  );
}

export default TicketDetails;
