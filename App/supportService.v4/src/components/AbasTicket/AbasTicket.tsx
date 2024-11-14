import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { TicketSimpleDTO } from "../../models/ticketDTO";
import TicketDetailsPage from "../../routes/TicketDetailsPage/TicketDetailsPage";
import TableTicket from "../TableTicket/TableTicket";
import "./AbasTicket.css";

type TicketsProps = {
  tickets: TicketSimpleDTO[];
};

function AbasTicket({ tickets }: TicketsProps) {
  const [activeKey, setActiveKey] = useState<string | undefined>("1");

  const [openTabs, setOpenTabs] = useState<
    Array<{ key: string; ticket: TicketSimpleDTO | null }>
  >([{ key: "2", ticket: null }]);

  const handleSelect = (key: string | null) => {
    if (key) {
      setActiveKey(key);
    }
  };

  const handleCloseTab = (key: string) => {
    const filteredTabs = openTabs.filter((tab) => tab.key !== key);
    setOpenTabs(filteredTabs);
    // Se a aba fechada era a ativa, define a aba ativa para a primeira aba ou para "1" se não houver abas dinâmicas
    if (activeKey === key) {
      setActiveKey(filteredTabs.length > 0 ? filteredTabs[0].key : "1");
    }

    if (filteredTabs.length === 0) {
      setActiveKey("1");
      setOpenTabs([{ key: "1", ticket: null }]);
    }
  };

  // Função onFilter passada para TableTicket
  const onFilter = (ticket: TicketSimpleDTO) => {
    const existingTab = openTabs.find(
      (tab) => tab.ticket && tab.ticket.id === ticket.id
    );
    if (existingTab) {
      setActiveKey(existingTab.key); // Se já tiver a aba, ativa ela
    } else {
      const newKey = `chamado-${ticket.id}`;
      setOpenTabs([...openTabs, { key: newKey, ticket }]); // Cria nova aba com o ticket
      setActiveKey(newKey); // Ativa a nova aba
    }
  };

  return (
    <div className="tickets-container">
      <Tabs
        activeKey={activeKey}
        onSelect={handleSelect}
        className="content-table"
      >
        <Tab
          eventKey="1"
          title={
            <>
              <FontAwesomeIcon icon={faList} color="#757575ec" />
              <span style={{ marginLeft: "10px" }}>Tickets</span>
            </>
          }
        >
          <div className="table-tickets-container">
            <TableTicket tickets={tickets} onFilter={onFilter} />
          </div>
        </Tab>

        {openTabs.map((tab) =>
          tab.ticket ? (
            <Tab
              key={tab.key}
              eventKey={tab.key}
              title={
                <>
                  <div className="container-title-tab">
                    <div># {tab.ticket?.id}</div>
                    <div className="close-icon">
                      <span
                        onClick={() => handleCloseTab(tab.key)}
                        className="close-title-icon"
                      >
                        x
                      </span>
                    </div>
                  </div>
                </>
              }
            >
              <div className="table-tickets-container">
                <TicketDetailsPage ticket={tab.ticket} />
              </div>
            </Tab>
          ) : null
        )}
        <Tab
          eventKey="novo-chamado"
          title={
            <>
              <FontAwesomeIcon icon={faPlus} color="#757575ec" />
              <span style={{ marginLeft: "10px" }}>Novo Ticket</span>
            </>
          }
        >
          <div className="table-tickets-container">
            <h3>Abra um Novo Chamado</h3>
            <p>Formulário para abrir um novo chamado vai aqui.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default AbasTicket;
