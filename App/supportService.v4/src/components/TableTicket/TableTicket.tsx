import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { TicketSimpleDTO } from "../../models/ticketDTO";
import * as functions from "../../utils/functions";
import "./TableTicket.css";

type TableTicketProps = {
  tickets: TicketSimpleDTO[];
  onFilter: (ticket: TicketSimpleDTO) => void;
};

function TableTicket({ tickets, onFilter }: TableTicketProps) {

  const handleChamadoClick = (ticket: TicketSimpleDTO) => {
    onFilter(ticket);
  };

  return (
    <div>
      <div className="ticket-table-container">
        <table className="container-base">
          <thead>
            <tr>
              <th>ID</th>
              <th>Assunto</th>
              <th>Data de Registro</th>
              <th>Data de Vencimento</th>
              <th>Tempo restante</th>
              <th>Dentro da SLA</th>
              <th>Status</th>
              <th>Solicitante</th>
              <th>Em atendimento por</th>
              <th>Finalizado por</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
            <tr key={ticket.id} onClick={() => handleChamadoClick(ticket)}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>
                  {new Date(ticket.registrationDate).toLocaleDateString()}
                </td>
                <td>{functions.formatDate(ticket.dueDate)}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ marginRight: "10px" }}
                    />
                  </div>

                  {functions.calculateRemainingTime(ticket.dueDate)}
                </td>
                <td>
                  {/* {ticket.onSLA ? (
                    <span>No prazo</span>
                  ) : (
                    <span style={{ color: "red" }}>Fora do prazo</span>
                  )} */}
                  sera implantado
                </td>
                <td>
                  <span
                    style={functions.getStatusTicketBadgeStyle(
                      ticket.statusTicket
                    )}
                  >
                    {ticket.statusTicket}
                  </span>
                </td>
                <td>{`${ticket.requester.firstName} ${ticket.requester.lastName}`}</td>
                <td>{ticket.technician ? `${ticket.technician.firstName} ${ticket.technician.lastName}` : 'Técnico não atribuído'}</td>
<td>{ticket.resolver ? `${ticket.resolver.firstName} ${ticket.resolver.lastName}` : 'Resolver não atribuído'}</td>

                <td>
                  <NavLink to="/ticketdetails">
                    <div className="container-button-details">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableTicket;
