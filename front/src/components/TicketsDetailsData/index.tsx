import "./styles.css";

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TicketSimpleDTO } from "../../models/Ticket";
import { calculateRemainingTime, formatDate } from "../../utils/functions";
import BasicModal from "../ModalAnexo";
import "./styles.css";

type Props = {
  ticket: TicketSimpleDTO;
};

function TicketsDetailsData({ ticket }: Props) {
  return (
    <div className="container-ticket-details-data">
      <div className="historic-container">
        <div className="row">
          <div
            className="col-8"
            style={{
              padding: "5px",
              height: "344px",
              display: "flex",
              justifyContent: "center",
            }}
          >

            <div className="container text-center container-grid">
              <div className="historic-title-atualizacacao" style={{ textAlign: "initial" }}>
                <h3>Detalhes do chamado</h3>
              </div>
              <div className="row" style={{ textAlign: "left", paddingLeft: "20px" }}>
                <div className="col" style={{ color: "gray", padding: "10px" }}>
                  <h5>Numero Ticket :</h5>
                  <h5>Assunto :</h5>
                  <h5>Cliente :</h5>
                  <h5>Solicitante</h5>
                  <h5>Contato :</h5>
                  <h5>Email Solicitante : </h5>
                  <h5>Responsável</h5>
                  <h5>Departamento</h5>
                </div>
                <div className="col " style={{ fontWeight: "700", padding: "10px" }}>
                  <h5>{ticket.id}</h5>
                  <h5>{ticket.subject}</h5>
                  <h5>Administração</h5>
                  <h5>{ticket.request.firstName + " " + ticket.request.lastName}</h5>
                  <h5>{ticket.request.contactNumber}</h5>
                  <h5>{ticket.request.email}</h5>
                  <h5>{ticket.technician.firstName + " " + ticket.technician.lastName}</h5>
                  <h5>Area solucionadora</h5>
                </div>

                <div className="col" style={{ color: "gray", padding: "10px" }}>
                  <h5>Dat. Abertura :</h5>
                  <h5>Dat. Final</h5>
                  <h5>Dat. Encerramento :</h5>
                  <h5>Tempo restante :</h5>
                  <h5>Grupo Categoria :</h5>
                  <h5>Tipo Solicitação :</h5>
                  <h5>Criticidade :</h5>
                  <h5>Status ticket</h5>
                </div>
                <div className="col" style={{ fontWeight: "700", padding: "10px" }}>
                  <h5>{formatDate(ticket.registrationDate)}</h5>
                  <h5>{formatDate(ticket.dueDate)}</h5>
                  <h5>{formatDate(ticket.completionDate)}</h5>

                  <h5> 
                  {ticket.statusTicket !== "CANCELED" && ticket.statusTicket !== "FINISHED" ? (
                    calculateRemainingTime(ticket.dueDate)
                  ) : (
                    ticket.statusTicket === "CANCELED" ? (
                      <span style={{ color: 'red' }}>CANCELED <FontAwesomeIcon icon={faTimesCircle} /></span>
                    ) : (
                      <span style={{ color: 'green' }}>FINISHED <FontAwesomeIcon icon={faCheckCircle} /></span>
                    )
                  )}
                  </h5>

                  <h5>{ticket.categoryProblem}</h5>
                  <h5>{ticket.typeRequest}</h5>
                  <h5>{ticket.priority}</h5>
                  <h5>{ticket.statusTicket}</h5>
                </div>
              </div>
              <div className="historic-title-atualizacacao" style={{ textAlign: "initial" }}>
                <h3>Descrição</h3>
              </div>
              <div style={{ overflow: "auto", height: "100%", overflowY: "auto" }}>
                {ticket.description}
              </div>
            </div>
          </div>

          <div
            className="col-4"
            style={{ padding: "5px 5px 5px 30px", borderLeft: "1px solid gray" }}
          >
            <div className="historic-title-atualizacacao">
              <h3>Atualização Ticket</h3>
            </div>

            <div className="teste" style={{ padding: "5px 5px 5px 5px" }}>
              <h3>Status do ticket: </h3>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={10}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select label="Status" labelId="status-label">
                      <MenuItem value="ACTIVE">Aberto</MenuItem>
                      <MenuItem value="INACTIVE">Fechado</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <div className="teste" style={{ padding: "5px 5px 5px 5px" }}>
              <h3>Area Solucionadora </h3>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={10}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="status-label">Areas</InputLabel>
                    <Select label="Status" labelId="status-label">
                      <MenuItem value="ACTIVE">TI</MenuItem>
                      <MenuItem value="INACTIVE">Networking</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <div className="teste" style={{ padding: "5px 5px 5px 5px" }}>
              <h3>Tecnico </h3>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={10}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="status-label">Areas</InputLabel>
                    <Select label="Status" labelId="status-label">
                      <MenuItem value="ACTIVE">TI</MenuItem>
                      <MenuItem value="INACTIVE">Networking</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <div className="teste" style={{ padding: "5px 5px 5px 5px" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Salvar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <BasicModal />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketsDetailsData;
