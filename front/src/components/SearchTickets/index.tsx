import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (searchParams: {
    ticketNumber: string;
    openDate: string;
    ticketStatus: string;
    areaSolucionadora: string;
  }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [openDate, setOpenDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [ticketStatus, setTicketStatus] = useState("");

  const [areaSolucionadora, setAreaSolucionadora] = useState('');

  const areasSolucionadoras = [
    { value: '', label: 'Todas' },
    { value: 'TI', label: 'TI' },
    { value: 'Redes', label: 'Redes' },
    { value: 'Desenvolvimento', label: 'Desenvolvimento' },
    { value: 'Security', label: 'Security' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'RH', label: 'RH' },
    { value: 'Selecao', label: 'Seleção' },
    { value: 'Boletos', label: 'Boletos' },
    { value: 'DP', label: 'DP' },
    { value: 'Administrativo', label: 'Administrativo' },
    { value: 'Suprimentos', label: 'Suprimentos' },
    // Adicione mais áreas solucionadoras conforme necessário
  ];

  const handleSearch = () =>
    onSearch({ ticketNumber, openDate, ticketStatus, areaSolucionadora });

  return (
    <form>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Número do Ticket"
            variant="outlined"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Data de Abertura"
            variant="outlined"
            type="date"
            value={openDate}
            onChange={(e) => setOpenDate(e.target.value)}
            fullWidth
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
              value={ticketStatus}
              onChange={(e) => setTicketStatus(e.target.value as string)}
            >
              <MenuItem value="">Selecione...</MenuItem>
              <MenuItem value="aberto">Aberto</MenuItem>
              <MenuItem value="andamento">Andamento</MenuItem>
              <MenuItem value="cancelado">Cancelado</MenuItem>
              <MenuItem value="finalizado">Finalizado</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="area-solucionadora-label">Área Solucionadora</InputLabel>
        <Select
          label="Área Solucionadora"
          labelId="area-solucionadora-label"
          value={areaSolucionadora}
          onChange={(e) => setAreaSolucionadora(e.target.value as string)}
        >
          {areasSolucionadoras.map((area) => (
            <MenuItem key={area.value} value={area.value}>
              {area.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
