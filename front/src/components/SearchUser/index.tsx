import { faFilter, faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DialogUserUpdateModal from "../DialogUserUpdateModal";

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

  const handleClear = () => {
    setText("");
    setStatus("");
    onSearch("", "");
  };


  const [dialogUserUpdateModal, setdialogUserUpdateModal] = useState({visible: false});

  function handleDialogUserUpdateClose() {
    setdialogUserUpdateModal({ ...dialogUserUpdateModal, visible: false })
  }

  function handleUpdateUserClick() {
    setdialogUserUpdateModal({ ...dialogUserUpdateModal, visible: true })
  }

  return (
    <div>
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
                    {text && (
                      <IconButton onClick={handleClear} edge="start">
                        <FontAwesomeIcon icon={faTimes} />
                      </IconButton>
                    )}
                    <FontAwesomeIcon icon={faSearch} />
                  </InputAdornment>
                )
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

          <Grid item xs={1} sm={2}>

            <div onClick={handleUpdateUserClick}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ marginRight: "8px" }}
                />
                Novo Usuário
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
       {
        dialogUserUpdateModal.visible &&
        <DialogUserUpdateModal
        onDialogClose={handleDialogUserUpdateClose}
        />
       }
    </div>
  );
};

export default SearchForm;
