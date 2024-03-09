import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapPagination from "../Pagination";
import SearchTickets from "../SearchTickets";
import * as ticketsData from "../TableTickets/ticketsData"; // Atualize o caminho conforme necessário

import "./styles.css";

const HelpdeskTable: React.FC = () => {
  const data = ticketsData.data;

  const getStatusBadgeStyle = (status: string): React.CSSProperties => {
    switch (status.toLowerCase()) {
      case "andamento":
        return {
          backgroundColor: "#4A90E2",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      case "aberto":
        return {
          backgroundColor: "#8DD600",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      case "cancelado":
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
        <SearchTickets />
      </div>
      <div className="table-tickets-container">
        <table className="table-base w-full table-tickets">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Solicitante</th>
              <th>Status</th>
              <th>Criticidade</th>
              <th>Tipo</th>
              <th>Data de Abertura</th>
              <th>Prazo Final</th>
              <th>Responsavel</th>
              <th>SLA</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.requester}</td>
                <td>
                  <span style={getStatusBadgeStyle(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td className="td-priority">
                  <span
                    style={{
                      display: "inline-block",
                      width: "12px",
                      height: "12px",
                      borderRadius: "20%",
                      backgroundColor: getPriorityColor(item.priority),
                      marginRight: "10px",
                    }}
                  ></span>
                  {item.priority}
                </td>
                <td>{item.type}</td>
                <td>{item.openingDate}</td>
                <td>{item.dueDate}</td>
                <td>{item.responsavel}</td>
                <td>Dentro do prazo</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="icon-sticky-note"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginationcomponent-tickets-component">
          <BootstrapPagination />
        </div>
      </div>
    </div>
  );
};

export default HelpdeskTable;
