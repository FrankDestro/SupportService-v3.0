import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { TicketDTO, TicketSimpleDTO } from "../../models/ticketDTO";
import TicketDetailsPage from "../../routes/TicketDetailsPage/TicketDetailsPage";
import TableTicket from "../TableTicket/TableTicket";
import "./TicketTabsContainer.css";
import TicketFormCreate from "../TicketFormCreate/TicketFormCreate";

type TicketsProps = {
  tickets: TicketSimpleDTO[];
  onActiveTabChange: (isTabOneActive: boolean) => void;
};

type Tab = {
  key: string;
  ticket: TicketDTO;
};

function TicketTabsContainer({ tickets, onActiveTabChange }: TicketsProps) {
  const [activeKey, setActiveKey] = useState<string | undefined>("1");

  console.log(activeKey);

  const [openTabs, setOpenTabs] = useState<
    Array<{ key: string; ticket: TicketSimpleDTO | TicketDTO | null }>
  >([{ key: "1", ticket: null }]);

  const handleSelect = (key: string | null) => {
    if (key) {
      setActiveKey(key);
      onActiveTabChange(key === "1");
    }
  };

  const handleCloseTab = (key: string) => {
    const filteredTabs = openTabs.filter((tab) => tab.key !== key);
    setOpenTabs(filteredTabs);
    if (activeKey === key) {
      setActiveKey(filteredTabs.length > 0 ? filteredTabs[0].key : "1");
    }
  };

  const onFilter = (_ticket: TicketSimpleDTO, ticketData: TicketDTO) => {
    const existingTab = openTabs.find(
      (tab) => tab.ticket && tab.ticket.id === ticketData.id
    );

    if (existingTab) {
      setActiveKey(existingTab.key);
    } else {
      const newKey = `chamado-${ticketData.id}`;
      setOpenTabs([...openTabs, { key: newKey, ticket: ticketData }]);
      setActiveKey(newKey);
      onActiveTabChange(false);
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
                    <div># {tab.ticket ? tab.ticket.id : "Novo Ticket"}</div>
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
                {tab.ticket && "ticketHistories" in tab.ticket ? (
                  <TicketDetailsPage ticket={tab.ticket as TicketDTO} />
                ) : (
                  <p>Carregando informações do ticket...</p>
                )}
              </div>
            </Tab>
          ) : null
        )}
        <Tab
          eventKey="newTicket"
          title={
            <>
              <FontAwesomeIcon icon={faPlus} color="#757575ec" />
              <span style={{ marginLeft: "10px" }}>Novo Ticket</span>
            </>
          }
        >
          <div className="table-tickets-container">
            <h3># Novo ticket</h3>
            <TicketFormCreate />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TicketTabsContainer;
