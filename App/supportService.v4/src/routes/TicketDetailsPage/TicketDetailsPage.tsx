import TicketDetails from "../../components/TicketDetails/TicketDetails"
import { TicketSimpleDTO } from "../../models/ticketDTO";

type Props = {
  ticket: TicketSimpleDTO;
};

function TicketDetailsPage({ ticket }: Props) {
  return (
    <div>
      <TicketDetails ticket={ticket} />
    </div>
  )
}

export default TicketDetailsPage
