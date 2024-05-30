import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";


type Props = {
  onSearch: Function;
};


function SearchForm({ onSearch }: Props) {

  const [numero, setNumero] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  function handleNumeroChange(event: any) {
    setNumero(event.target.value)
  }

  function handleDataChange(event: any) {
    setData(event.target.value);
  }

  function handleStatusChange(event: any) {
    setStatus(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(numero, data, status)
    onSearch(numero, data, status);
  }

  return (

    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Número do Ticket"
            variant="outlined"
            fullWidth
            onChange={handleNumeroChange}
            value={numero}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Data de Abertura"
            variant="outlined"
            type="date"
            fullWidth
            onChange={handleDataChange}
            value={data}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="status-label">Status do Ticket</InputLabel>
            <Select
              label="Status do Ticket"
              labelId="status-label"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value="">Selecione...</MenuItem>
              <MenuItem value="OPEN">Aberto</MenuItem>
              <MenuItem value="IN_PROGRESS">Andamento</MenuItem>
              <MenuItem value="FROZEN">Aguardando</MenuItem>
              <MenuItem value="CANCELED">Cancelado</MenuItem>
              <MenuItem value="FINISHED">Finalizado</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            <FontAwesomeIcon
              icon={faFilter}
              style={{marginRight : "8px"}}
            />
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
