import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../Button/Button";
import "./SearchTicket.css";

type Props = {
  onSearch: (...args: string[]) => void;
};

function SearchTicker({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [areaSolucionadora, setAreaSolucionadora] = useState("");
  const [tipoRequisicao, setTipoRequisicao] = useState("");
  const [categoria, setCategoria] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(
      searchTerm,
      status,
      date,
      areaSolucionadora,
      tipoRequisicao,
      categoria
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-ticker-container">
        <div className="search-input-ticker-container">
          <input
            type="text"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="floating-input"
          />
          <label className="floating-label">Número do ticket</label>
          <FontAwesomeIcon icon={faSearch} className="search-icon-ticker" />
        </div>
        <div className="filter-container-ticker">
          <div className="status-select-ticker-container">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Status Ticket</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>

          <div className="area-select-ticker-container">
            <select
              value={areaSolucionadora}
              onChange={(e) => setAreaSolucionadora(e.target.value)}
            >
              <option value="">Área Solucionadora</option>
              <option value="suporte">Suporte</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="infraestrutura">Infraestrutura</option>
            </select>
          </div>

          <div className="tipo-select-ticker-container">
            <select
              value={tipoRequisicao}
              onChange={(e) => setTipoRequisicao(e.target.value)}
            >
              <option value="">Tipo de Requisição</option>
              <option value="bug">Bug</option>
              <option value="melhoria">Melhoria</option>
              <option value="tarefa">Tarefa</option>
            </select>
          </div>

          <div className="categoria-select-ticker-container">
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Categoria</option>
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>

          <div className="date-select-ticker-container">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="date-input-ticker"
            />
          </div>
          <Button
            text="Filtrar"
            icon={faFilter}
            background="#11344d"
            hoverColor="#335577"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchTicker;
