import { faFilter, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SearchUser.css"; // Adicione estilos específicos para o componente
import Button from "../Button";

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="search-user-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder=" "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="floating-input"
          required
        />
        <label className="floating-label">Usuário / ID registro</label>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="filter-container">
        <div className="status-select-container">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Selecione o status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <Button text="Filtrar" icon={faFilter} background="#2196f3" />
        <Button text="Adicinar Novo" icon={faPlus} background="#2196f3" />
      </div>
    </div>
  );
}

export default SearchUser;
