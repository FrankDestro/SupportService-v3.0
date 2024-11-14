import { faFilter, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../Button/Button";
import "./SearchUser.css";

type Props = {
  onSearch: (...args: string[]) => void;
};

function SearchUser({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(searchTerm, status);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-user-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="floating-input"
          />
          <label className="floating-label">Usuário / ID registro</label>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="filter-container">
          <div className="status-select-container">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Selecione o status</option>
              <option value="ACTIVE">Ativo</option>
              <option value="INACTIVE">Inativo</option>
            </select>
          </div>
          <Button
            text="Filtrar"
            icon={faFilter}
            background="#11344d"
            hoverColor="#335577"
            type="submit"
          />
          <Button
            text="Adicinar Novo"
            icon={faPlus}
            background="#11344d"
            hoverColor="#335577"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchUser;
