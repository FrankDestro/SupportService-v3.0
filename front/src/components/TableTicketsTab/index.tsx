import { faCheckCircle, faList, faMagnifyingGlass, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import TicketDetails from '../../Page/TicketDetails';
import chronometer from "../../assets/chronometer.png";
import { TicketDTO } from '../../models/Ticket';
import * as ticketService from "../../services/ticket-service";
import { calculateRemainingTime, formatDate } from "../../utils/functions";
import BootstrapPagination from '../Pagination';
import SearchTickets from '../SearchTickets';
import './styles.css';

type QueryParams = {
    page: number;
    id: string;
    registrationDate: string;
    status: string;
};

const Abas: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string | undefined>("1");

    const [openTabs, setOpenTabs] = useState<Array<{ key: string, ticket: TicketDTO | null }>>([
        { key: "1", ticket: null }
    ]);

    const handleSelect = (key: string | null) => {
        if (key) {
            setActiveKey(key);
        }
    };

    const handleChamadoClick = (ticket: TicketDTO) => {
        const existingTab = openTabs.find(tab => tab.ticket && tab.ticket.id === ticket.id);
        if (existingTab) {
            setActiveKey(existingTab.key);
        } else {
            const newKey = `chamado-${ticket.id}`;
            setOpenTabs([...openTabs, { key: newKey, ticket }]);
            setActiveKey(newKey);
        }
    };

    const handleCloseTab = (key: string) => {
        const filteredTabs = openTabs.filter(tab => tab.key !== key);
        setOpenTabs(filteredTabs);
        if (activeKey === key) {
            setActiveKey(filteredTabs.length > 0 ? filteredTabs[0].key : "1");
        }
    };

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

    const getStatusColor = (statusTicket: string): string => {
        switch (statusTicket.toLowerCase()) {
            case "open":
                return "#1DD700";
            case "in_progress":
                return "#1493dc";
            case "frozen":
                return "rgb(236, 166, 36)";
            case "canceled":
                return "#FF0000";
            default:
                return "black";
        }
    };

    return (
        <div className='tickets-container base-card'>
            <Tabs activeKey={activeKey} onSelect={handleSelect} className='content-table'>
                <Tab eventKey="1"
                    title={
                        <>
                            <FontAwesomeIcon icon={faList} />
                            <span style={{ marginLeft: "10px" }}>Tickets</span>
                        </>
                    }
                >
                    <div className="table-tickets-container">
                        <div style={{marginTop: "10px"}}>
                            <SearchTickets onSearch={handleSearch} />
                        </div>
                        <Table hover className='table-base w-full table-tickets'>
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
                                    <tr key={ticket.id} onClick={() => handleChamadoClick(ticket)}>
                                        <td>{ticket.id}</td>
                                        <td>{ticket.subject}</td>
                                        <td>{ticket.request.firstName}</td>
                                        <td>
                                            <span
                                                style={{
                                                    color: "white",
                                                    padding: "4px 8px",
                                                    borderRadius: "4px",
                                                    fontSize: "12px",
                                                    background: getStatusColor(ticket.statusTicket)
                                                }}
                                            >
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

                                        <td style={{ display: "flex", height: "43px" }}>
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
                                            <Tooltip title="Ver detalhes" onClick={() => handleChamadoClick(ticket)}>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlass}
                                                    className="icon-sticky-note"
                                                />
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="paginationcomponent-container">
                        <BootstrapPagination
                            currentPage={queryParams.page}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </Tab>

                {openTabs.map(tab => tab.key !== "1" && (
                    <Tab key={tab.key} eventKey={tab.key} title={<>
                        <div className='container-title-tab'>
                            <div>
                                {tab.ticket?.id}
                            </div>
                            <div className="close-icon">
                                <span onClick={() => handleCloseTab(tab.key)} className='close-title-icon'>X</span>
                            </div>
                        </div>
                    </>}>
                        <TicketDetails ticket={tab.ticket} />
                    </Tab>
                ))}
                <Tab eventKey="novo-chamado"
                    title={
                        <>
                            <FontAwesomeIcon icon={faPlus} />
                            <span style={{ marginLeft: "10px" }}>Novo Ticket</span>
                        </>
                    }>
                    <div>
                        <h3>Abra um Novo Chamado</h3>
                        <p>Formulário para abrir um novo chamado vai aqui.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Abas;
