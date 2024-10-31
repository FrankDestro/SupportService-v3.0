import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap"; // Importando o JavaScript do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import * as functions from "../../utils/functions";
import SearchUser from "../SearchUser/SearchUser";
import "./TableUsers.css";

const TableUsers = () => {
  const usuarios = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "TI",
      name: "João Silva",
      email: "joao.silva@example.com",
      status: "Ativo",
      role: "Admin",
      createdBy: "Maria Souza",
      bloqueio: "Não",
    },
    {
      id: 2,
      avatar:
        "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "RH",
      name: "Fernanda Lima",
      email: "fernanda.lima@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Pedro Alves",
      bloqueio: "Sim",
    },
    {
      id: 3,
      avatar:
        "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Financeiro",
      name: "Lucas Pereira",
      email: "lucas.pereira@example.com",
      status: "Ativo",
      role: "Admin",
      createdBy: "Ana Costa",
      bloqueio: "Não",
    },
    {
      id: 4,
      avatar:
        "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Marketing",
      name: "Juliana Santos",
      email: "juliana.santos@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Roberto Mendes",
      bloqueio: "Não",
    },
    {
      id: 5,
      avatar:
        "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Vendas",
      name: "Ricardo Gomes",
      email: "ricardo.gomes@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Laura Ferreira",
      bloqueio: "Sim",
    },
  ];

  return (
    <>
      <div className="container-base">
        <SearchUser />
      </div>

      <table className="container-base">
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Department</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Created By</th>
            <th>Bloqueio</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>
                <img src={usuario.avatar} alt={`Avatar ${usuario.name}`} />
              </td>
              <td>{usuario.department}</td>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>
                <span style={functions.getStatusBadgeStyle(usuario.status)}>
                  {usuario.status}
                </span>
              </td>
              <td>{usuario.role}</td>
              <td>{usuario.createdBy}</td>
              <td>
                <span
                  style={functions.getBlockedStatusBadgeStyle(usuario.bloqueio)}
                >
                  {usuario.bloqueio}
                </span>
              </td>
              <td>
                <div className="container-button-details">
                  <FontAwesomeIcon icon={faEdit} />
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUsers;
