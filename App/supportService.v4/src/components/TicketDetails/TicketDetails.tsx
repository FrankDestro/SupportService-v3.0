import "./TicketDetails.css";

import { faSave, faTicket } from "@fortawesome/free-solid-svg-icons";
import { TicketDTO } from "../../models/ticketDTO";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  ticket: TicketDTO;
};

function TicketDetails({ ticket }: Props) {
  return (
    <div className="container-ticket-details">
      <div className="left-ticket-details-summary container-base">
        <div className="ticket-details">
          <div className="main-info">
            <h2>Ticket # {ticket.id}</h2>
            <p>
              <strong>Assunto:</strong> {ticket.subject}
            </p>
            <p>
              <strong>Status:</strong>
              <p className={`ticket-status ${ticket.statusTicket}`}>
                {ticket.statusTicket}
              </p>
            </p>
            <p>
              <strong>Data de Registro : </strong>{" "}
              {new Date(ticket.registrationDate).toLocaleString()}
            </p>
            <p>
              <strong>Data de Conclusão:</strong>{" "}
              {ticket.completionDate
                ? new Date(ticket.completionDate).toLocaleString()
                : "Não concluído"}
            </p>
            <p>
              <strong>Prazo Final:</strong>{" "}
              {new Date(ticket.dueDate).toLocaleString()}
            </p>
            <p>
              <strong>SLA: </strong>
              {/* <p className={`ticket-onSLA ${ticket.onSLA}`}>
                {ticket.onSLA ? "No prazo" : "Fora do prazo"}
              </p> */}
              sera implementado
            </p>
            <p>
              <strong>Criticidade:</strong> {ticket.sla.severity}
            </p>
            <p>
              <strong>Tempo de Resposta:</strong> {ticket.sla.responseTime}{" "}
              horas
            </p>

            <p>
              <FontAwesomeIcon
                icon={faTicket}
                style={{ marginRight: "10px" }}
              />
              <strong>Referencia ticket: </strong>
              {ticket.parentTicketId ? ticket.parentTicketId : "N/A"}
            </p>

            <div className="description-container">
              <strong>Descrição:</strong>
              <p className="description">{ticket.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="center-ticket-details-history container-base">
        <h3>Andamento do ticket</h3>

        {ticket.ticketHistories.map((history) => (
          <div key={history.id} className="history-entry">
            <div className="history-user">
              <img
                src={history.user.imgProfile}
                alt={`${history.user.firstName} ${history.user.lastName}`}
                className="user-image"
              />
              <div className="user-details">
                <p>
                  <strong>
                    {history.user.firstName} {history.user.lastName}
                  </strong>
                </p>
                <p>{history.user.department.description}</p>
              </div>
            </div>
            <div className="history-info">
              <p className="history-description">{history.description}</p>
              <p>
                <strong>Date:</strong>
                {new Date(history.registrationDate).toLocaleString()}
              </p>
              <p>
                <strong>Type:</strong> {history.noteType}
              </p>
              {history.annotationPublic && (
                <span className="public-tag">Public</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="right-center-ticket-details-options container-base">
        <div className="requester-info">
          <h4>Solicitante</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={ticket.requester.imgProfile}
              alt={`${ticket.requester.firstName} ${ticket.requester.lastName}`}
              className="requester-image"
            />
            <h3>
              {ticket.requester.firstName} {ticket.requester.lastName}
            </h3>
          </div>

          <div className="requester-details">
            <p>
              <strong>Departamento:</strong>
              {ticket.requester.department.description}
            </p>
            <p>
              <strong>Email:</strong>
              <a href={`mailto:${ticket.requester.email}`}>
                {ticket.requester.email}
              </a>
            </p>
            <p>
              <strong>Contato:</strong>{" "}
              <a href={`tel:${ticket.requester.contactNumber}`}>
                {ticket.requester.contactNumber}
              </a>
            </p>
          </div>
        </div>

        <div className="options-container">
          <h4>Opções de Alteração</h4>

          <div className="form-group">
            <label htmlFor="typeRequest">Tipo de Solicitação</label>
            <select id="typeRequest" className="styled-select">
              <option value={ticket.typeRequest.id}>
                {ticket.typeRequest.name}
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sla">SLA</label>
            <select id="sla" className="styled-select">
              <option value={ticket.sla.id}>
                {ticket.sla.severity} - {ticket.sla.responseTime} horas
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="solvingArea">Área de Resolução</label>
            <select id="solvingArea" className="styled-select">
              <option value={ticket.solvingArea.id}>
                {ticket.solvingArea.name}
              </option>
              {/* Adicione outras opções conforme necessário */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="categoryTicket">Categoria do Ticket</label>
            <select id="categoryTicket" className="styled-select">
              <option value={ticket.categoryTicket.id}>
                {ticket.categoryTicket.name}
              </option>
              {/* Adicione outras opções conforme necessário */}
            </select>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              text="Salvar alteração"
              icon={faSave}
              background="#2196f3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
