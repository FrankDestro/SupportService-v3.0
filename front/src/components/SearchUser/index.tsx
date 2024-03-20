import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
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

  const [text, setText] = useState("");
  const [status, setStatus] = useState("");


  function handleChange(event: any) {
    setText(event.target.value);
    if (text != "") {
      setStatus("");
    }
  }

  function handleStatusChange(event: any) {
    setStatus(event.target.value);
    if (status === "ACTIVE" || status === "INACTIVE") {
      setText("");
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text, status);
  }


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome de Usuário / Registro"
            variant="outlined"
            value={text}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              label="Status"
              labelId="status-label"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="ACTIVE">Ativo</MenuItem>
              <MenuItem value="INACTIVE">Inativo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleSearch}
            fullWidth
            type="submit"
          >
            <FontAwesomeIcon
              icon={faFilter}
              style={{ marginRight: "8px" }}
            />
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
