import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useState } from "react";
import { InsertDriveFile } from "@mui/icons-material";

import "./styles.css";

function SearchDashboard() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [solverArea] = useState("");

  const handleFilter = () => {
    console.log("Filtrar por:", startDate, endDate, solverArea);
  };

  const handleDownloadPDF = () => {
    console.log("Download do PDF");
  };

  const handleDownloadExcel = () => {
    // Lógica para download do Excel
    console.log("Download do Excel");
  };

  const [areaSolucionadora, setAreaSolucionadora] = useState("");

  const areasSolucionadoras = [
    { value: "", label: "Todas" },
    { value: "TI", label: "TI" },
    { value: "Redes", label: "Redes" },
    { value: "Desenvolvimento", label: "Desenvolvimento" },
    { value: "Security", label: "Security" },
    { value: "Telecom", label: "Telecom" },
    { value: "RH", label: "RH" },
    { value: "Selecao", label: "Seleção" },
    { value: "Boletos", label: "Boletos" },
    { value: "DP", label: "DP" },
    { value: "Administrativo", label: "Administrativo" },
    { value: "Suprimentos", label: "Suprimentos" },
  ];

  return (
    <div className="container-search-dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            type="date"
            label="Data Inicial"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="date"
            label="Data Final"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="area-solucionadora-label">
              Área Solucionadora
            </InputLabel>
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
      </Grid>

      <div className="container-button-search">
        <div>
          <Grid item xs={12} md={2}>
            <Button variant="contained" color="primary" onClick={handleFilter}>
              Filtrar
            </Button>
          </Grid>
        </div>

        <div className="content-button">
          <Button
            variant="contained"
            style={{ backgroundColor: "#D32F2F", color: "#FFFFFF" }}
            onClick={handleDownloadPDF}
            startIcon={<PictureAsPdfIcon />}
          >
            Exportar para pdf
          </Button>

          <Button
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "#FFFFFF" }}
            onClick={handleDownloadExcel}
            startIcon={<InsertDriveFile />}
          >
            Exportar para Excel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchDashboard;
