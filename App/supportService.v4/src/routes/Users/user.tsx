import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import NoData from "../../components/NoData/NoData";
import SearchUser from "../../components/SearchUser/SearchUser";
import TableUsers from "../../components/TableUsers/TableUsers";
import { UserDTO } from "../../models/RequesterDTO";
import * as userService from "../../Service/user-service";
import Pagination from "../../components/Pagination/Pagination";

type QueryParams = {
  page: number;
  id: string;
  name: string;
  status: string;
};

function User() {
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
      .findAllUserByCriteria(
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
    setUsers([]);

    const isNumber = /^\d+$/.test(searchText);

    const updatedParams = {
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    userService
      .findAllUserByCriteria(
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

  return (
    <div>
      <div className="container-base">
        <SearchUser onSearch={handleSearch} />
      </div>

      {users.length == 0 ? (
        <NoData icon={faDatabase} message="Não há dados disponíveis" />
      ) : (
        <>
          <TableUsers users={users} />
          <div className="container-pagination">
            <Pagination
              currentPage={queryParams.page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default User;
