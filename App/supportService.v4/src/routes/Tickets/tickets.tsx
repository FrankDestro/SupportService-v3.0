import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AbasTicket from "../../components/AbasTicket/AbasTicket";
import NoData from "../../components/NoData/NoData";
import SearchTicker from "../../components/SearchTicket/SearchTicket";
import { TicketSimpleDTO } from "../../models/ticketDTO";
import * as ticketService from "../../Service/ticket-service";

type QueryParams = {
  page: number;
  id: string;
  registrationDate: string;
  status: string;
  area: string;
  categoryTicket: string;
  typeRequest: string;
};

function Ticket() {
  const [tickets, setTickets] = useState<TicketSimpleDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    id: "",
    registrationDate: "",
    status: "",
    area: "",
    categoryTicket: "",
    typeRequest: "",
  });

  useEffect(() => {
    ticketService
      .allTicketsRequest(
        queryParams.page,
        queryParams.id,
        queryParams.registrationDate,
        queryParams.status,
        queryParams.area,
        queryParams.categoryTicket,
        queryParams.typeRequest
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTickets(content);
        setTotalPages(totalPages);
        console.log(tickets);
      });
  }, [queryParams]);

  function handleSearch(
    id: string,
    registrationDate: string,
    status: string,
    area: string,
    categoryTicket: string,
    typeRequest: string
  ) {
    setTickets([]);
    setQueryParams({
      ...queryParams,
      page: 0,
      id: id,
      registrationDate: registrationDate,
      status: status,
      area: area,
      categoryTicket: categoryTicket,
      typeRequest: typeRequest,
    });
  }

  // const handlePageChange = (newPage: number) => {
  //   setQueryParams({ ...queryParams, page: newPage });
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="container-base">
        <SearchTicker onSearch={handleSearch} />
      </div>
      {tickets.length == 0 ? (
        <NoData icon={faTicket} message="Não foi encontrado ticket" />
      ) : (
        <>
          <AbasTicket tickets={tickets} />
        </>
      )}
    </div>
  );
}

export default Ticket;
