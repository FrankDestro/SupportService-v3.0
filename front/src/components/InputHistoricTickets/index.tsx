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
                  height: "180px",
                  padding: "10px 10px 10px 10px",
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

       
      </div>
    </div>
  );
}

export default InputHistoricTickets;
