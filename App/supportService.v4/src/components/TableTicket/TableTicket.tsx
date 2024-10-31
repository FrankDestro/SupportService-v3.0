import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ticketDataMock from "../../mocks/mockTicketData"; // Caminho do arquivo de dados mockados
import * as functions from "../../utils/functions";
import SearchTicker from "../SearchTicket/SearchTicket";

function TableTicket() {
  return (
    <div>
      <div className="container-base">
        <SearchTicker />
      </div>
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
            {ticketDataMock.content.map((ticket) => (
              <tr key={ticket.id}>
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
                <td>{ticket.onSLA ? <span>No prazo</span> : <span style={{color: "red"}}>Fora do prazo</span>}</td>
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
                <td>{`${ticket.technician.firstName} ${ticket.technician.lastName}`}</td>
                <td>{`${ticket.resolver.firstName} ${ticket.resolver.lastName}`}</td>
                <td>
                  <div className="container-button-details">
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
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
