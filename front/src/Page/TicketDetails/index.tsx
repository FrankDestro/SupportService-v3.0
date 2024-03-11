import InputHistoricTickets from "../../components/InputHistoricTickets";
import TicketsDetailsData from "../../components/TicketsDetailsData";
import TimeLineTickets from "../../components/TimeLineTickets";

function TicketDetails() {
  return (
    <div className="app-container-content">
      <div className="base-card" style={{ marginBottom: "10px" }}>
        <TicketsDetailsData />
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
