import "./styles.css";

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import BasicModal from "../ModalAnexo";
import "./styles.css";

function TicketsDetailsData() {
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
              // style={{  border: "1px solid gray"}}
            }}
          >
            
            <div className="container text-center container-grid">
            <div className="historic-title-atualizacacao" style={{textAlign: "initial"}}>
                <h3>Detalhes do chamado</h3>
              </div>
              <div className="row" >
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
                <div className="col " style={{  fontWeight: "700", padding: "10px"}}>
                  <h5>7064</h5>
                  <h5>Problema mouse</h5>
                  <h5>Administração</h5>
                  <h5>Juan Carlos Goncalves</h5>
                  <h5>(12) 7685947857</h5>
                  <h5>juan@gmail.com</h5>
                  <h5>Franklyn Damaceno</h5>
                  <h5>TI</h5>
                </div>

                <div className="col" style={{ color: "gray",padding: "10px" }}>
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
                  <h5>10/04/2024 14:20</h5>
                  <h5>12/04/2024 15:00</h5>
                  <h5>null</h5>
                  <h5>02:50h</h5>
                  <h5>HARDWARE</h5>
                  <h5>Problema</h5>
                  <h5>BAIXA</h5>
                  <h5>ANDAMENTO</h5>
                </div>
              </div>
              <div className="historic-title-atualizacacao" style={{textAlign: "initial"}}>
                <h3>Descrição</h3>
              </div>
              <div style={{overflow: "auto", height: "100%", overflowY: "auto"}}>
                Desde ontem à tarde, tenho enfrentado dificuldades com o
                funcionamento do meu mouse. O comportamento anormal inclui
                movimentos irregulares do cursor na tela, dificuldades em clicar
                e, ocasionalmente, cliques duplos indesejados. Isso está
                impactando negativamente a minha produtividade durante o uso do
                computador.
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
