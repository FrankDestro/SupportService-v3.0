import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button/Button";
import "./SearchPanel.css";

function SearchPanel() {
  const [status, setStatus] = useState("");

  return (
    <div className="ticket-search-panel">
      <div className="ticket-filter-panel">
        <div className="ticket-status-select">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Área solucionadora</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <Button
          text="Filtrar"
          icon={faFilter}
          background="#11344d"
          hoverColor="#335577"
        />
      </div>
    </div>
  );
}

export default SearchPanel;
