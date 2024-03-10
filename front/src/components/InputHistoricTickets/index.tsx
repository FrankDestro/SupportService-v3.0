import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import "./styles.css";
import BasicModal from "../ModalAnexo";

function InputHistoricTickets() {
  return (
    <div className="historic-container">

      <div className="row">
        <div className="col-8" style={{ padding: "5px", height: "315px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={0} sm={12}>
              <TextareaAutosize
                placeholder="Sua mensagem aqui"
                style={{
                  width: "100%",
                  border: "1px solid gray",
                  height: "200px",
                  padding: "10px 10px 10px 10px", // Adicione o espaçamento interno desejado aqui
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="status-label">Tipo de publicação</InputLabel>
                <Select label="Status" labelId="status-label">
                  <MenuItem value="ACTIVE">pública</MenuItem>
                  <MenuItem value="INACTIVE">interna</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Inserir Nota
              </Button>
            </Grid>
          </Grid>
        </div>

        <div
          className="col-4"
          style={{ padding: "5px 5px 5px 5px" }}
        >
          <div className="historic-title-atualizacacao">
            <h3>Atualização Ticket</h3>
          </div>

          <div className="teste" style={{ padding: "5px 5px 5px 5px" }}>
            <h3>Status do ticket: </h3>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
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
              <BasicModal/>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputHistoricTickets;
