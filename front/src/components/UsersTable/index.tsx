import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { UserDTO } from "../../models/users";
import * as userService from "../../services/user-service";
import BootstrapPagination from "../Pagination";
import SearchUser from "../SearchUser";
import { formatDate } from "../../utils/functions";

import "./styles.css";

type QueryParams = {
  page: number;
  id: string;
  name: string;
  status: string;
};

function UserTable() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    id: "",
    name: "",
    status: "",
  });

  useEffect(() => {
    userService
      .findPageRequest(
        queryParams.page,
        queryParams.id,
        queryParams.name,
        queryParams.status
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTotalPages(totalPages);
        setUsers(content);
      });
  }, [queryParams]);

  function handleSearch(searchText: string, status: string) {
    console.log("Search Parameters:", { searchText, status });

    setUsers([]);

    const isNumber = /^\d+$/.test(searchText);

    let updatedParams = {
      ...queryParams,
      page: 0,
      id: "",
      name: "",
      status: "",
    };

    switch (true) {
      case isNumber:
        updatedParams.id = searchText;
        updatedParams.status = "";
        break;
      case status !== "":
        updatedParams.status = status;
        updatedParams.name = "";
        break;
      default:
        updatedParams.name = searchText;
        updatedParams.status = "";
    }

    setQueryParams(updatedParams);
  }

  const handlePageChange = (newPage: number) => {
    setQueryParams({ ...queryParams, page: newPage });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });

  };

  const getStatusBadgeStyle = (status: string): React.CSSProperties => {
    switch (status.toLowerCase()) {
      case "inactive":
        return {
          backgroundColor: "#FF0000", // Update to a shade of red
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
      default:
        return {
          backgroundColor: "#8DD600",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        };
    }
  };

  return (
    <div className="users-container base-card">
      <div className="base-card ">
        <SearchUser onSearch={handleSearch} />
      </div>

      <div className="table-user-container">
        <table className="table-base table-user">
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
              <th>Created Date</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={{ width: "60px", color: "black" }}>{user.id}</td>
                <td className="avatar-container">
                  <img
                    src={user.imgProfile}
                    alt={`Avatar of ${user.firstName}`}
                  />
                </td>
                <td>{user.department.description}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>
                  <span style={getStatusBadgeStyle(user.status)}>
                    {user.status}
                  </span>
                </td>
                {user.roles.map((role) => (
                  <td key={role.id}>{role.authority}</td>
                ))}
                <td>{user.createdByUserName}</td>

                <td>{formatDate(user.createdAt)}</td>

                <td>
                  <FontAwesomeIcon
                    icon={faUserEdit}
                    className="icon-sticky-note"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="paginationcomponent-container">
        <BootstrapPagination
          currentPage={queryParams.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default UserTable;
