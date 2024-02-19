import { faTicket } from "@fortawesome/free-solid-svg-icons";
import CarTitle from "../../components/CardTitle";
import HelpdeskTable from "../../components/TableTickets";

function Tickets() {
  return (
    <div className="app-container-content">
      <CarTitle text="Tickets" icon={faTicket} />
      <HelpdeskTable />
    </div>
  );
}

export default Tickets;
