import { faCheckCircle, faMagnifyingGlass, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chronometer from "../../assets/chronometer.png";
import { TicketDTO } from "../../models/Ticket";
import * as ticketService from "../../services/ticket-service";
import { calculateRemainingTime, formatDate } from "../../utils/functions";
import BootstrapPagination from "../Pagination";
import SearchTickets from "../SearchTickets";
import "./styles.css";

type QueryParams = {
  page: number;
  id: string;
  registrationDate: string;
  status: string;
};

function HelpdeskTable() {

  const [tickets, setTickets] = useState<TicketDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    id: "",
    registrationDate: "",
    status: "",
  });

  useEffect(() => {
    ticketService
      .allTicketsRequest(
        queryParams.page,
        queryParams.id,
        queryParams.registrationDate,
        queryParams.status
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTickets(content)
        setTotalPages(totalPages);
      });
  }, [queryParams]);


  function handleSearch(id: string, registrationDate: string, status: string) {
    setTickets([]);
    setQueryParams({ ...queryParams, page: 0, id: id, registrationDate: registrationDate, status: status });
  }

  const handlePageChange = (newPage: number) => {
    setQueryParams({ ...queryParams, page: newPage });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const getStatusBadgeStyle = (statusTicket: string): React.CSSProperties => {

    console.log(statusTicket)

    switch (statusTicket.toLowerCase()) {
      case "OPEN":
        return {
          backgroundColor: "#4A90E2",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      case "IN_PROGRESS":
        return {
          backgroundColor: "#8DD600",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      case "FROZEN":
        return {
          backgroundColor: "yellow",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      case "CANCELED":
        return {
          backgroundColor: "red",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      default:
        return {
          backgroundColor: "gray",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
    }
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case "alta":
        return "red";
      case "média":
        return "orange";
      case "baixa":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="tickets-container base-card">
      <div className="base-card">
        <SearchTickets onSearch={handleSearch} />
      </div>
      <div className="table-tickets-container">
        <table className="table-base w-full table-tickets">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Solicitante</th>
              <th>Status</th>
              <th>Criticidade</th>
              <th>Tipo</th>
              <th>Data de Abertura</th>
              <th>Prazo Final</th>
              <th>Responsavel</th>
              <th>Tempo Restante</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.request.firstName}</td>
                <td>
                  <span style={getStatusBadgeStyle(ticket.statusTicket)}>
                    {ticket.statusTicket}
                  </span>
                </td>
                <td className="td-priority">
                  <span
                    style={{
                      display: "inline-block",
                      width: "12px",
                      height: "12px",
                      borderRadius: "20%",
                      backgroundColor: getPriorityColor(ticket.priority),
                      marginRight: "10px",
                    }}
                  ></span>
                  {ticket.priority}
                </td>
                <td>{ticket.categoryProblem}</td>
                <td>{formatDate(ticket.registrationDate)}</td>
                <td>{formatDate(ticket.dueDate)}</td>
                <td>{ticket.technician.firstName ? ticket.technician.firstName : 'Sem atendimento'}</td>

                <td style={{ display: "flex" , height: "43px"}}>
                  <div style={{ marginRight: "10px" }}>
                    {ticket.statusTicket !== "CANCELED" && ticket.statusTicket !== "FINISHED" && (
                      <img src={chronometer} alt="chronometer" style={{ width: "20px" }} />
                    )}
                  </div>

                  {ticket.statusTicket !== "CANCELED" && ticket.statusTicket !== "FINISHED" ? (
                    calculateRemainingTime(ticket.dueDate)
                  ) : (
                    ticket.statusTicket === "CANCELED" ? (
                      <span style={{ color: 'red' }}>CANCELED <FontAwesomeIcon icon={faTimesCircle} /></span>
                    ) : (
                      <span style={{ color: 'green' }}>FINISHED <FontAwesomeIcon icon={faCheckCircle} /></span>
                    )
                  )}
                </td>

                <td>
                  <Link to={`/ticketdetails/${ticket.id}`}>
                  <Tooltip title="Ver detalhes">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="icon-sticky-note"
                  />     
                  </Tooltip>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginationcomponent-container">
          <BootstrapPagination
            currentPage={queryParams.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpdeskTable;
