import { useEffect, useState } from "react"
import { SLADTO } from "../../../models/slaDTO"
import * as slaService from '../../../Service/sla-service';
import './SlaSettingsPage.css';
import Button from "../../../components/Button/Button";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function SlaSettings() {

  const [sla, setSla] = useState<SLADTO[]>([]);
  const [selectedSla, setSelectedSla] = useState<SLADTO | null>(null);


  useEffect(() => {
    slaService.getAllSla()
      .then((response) => {
        setSla(response.data);
      })
      .catch((e) => {
        console.error("Erro ao buscar os SLAs:", e);
      });
  }, []);

  const handleCardClick = (item: SLADTO) => {
    setSelectedSla(item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedSla) {
      setSelectedSla({ ...selectedSla, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSla) {
      console.log("SLA atualizado:", selectedSla);
    }
  };

  return (
    <div className="container-settings-sla">
      <h2 className="container-title-settings">Configurações de SLA</h2>
      <div className="container-settings-sla-content">
        <div className="container-settings-sla-list">
          {sla.map((item) => (
            <div
              key={item.id}
              className="content-settings-sla-item"
              onClick={() => handleCardClick(item)}
              style={{
                border: selectedSla?.id === item.id ? "2px solid red" : "1px solid gray",
                cursor: "pointer",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "black", fontWeight: "700" }}>ID</span>
              <span>{item.id}</span>
              <span style={{ color: "black", fontWeight: "700" }}>Criticidade</span>
              <span>{item.severity}</span>
              <span style={{ color: "black", fontWeight: "700" }}>Tempo de Resposta</span>
              <span>{item.responseTime} horas</span>
            </div>
          ))}
        </div>

        {/* Formulário de SLA */}
        <div className="container-settings-sla-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="floating-input"
              value={selectedSla?.severity || ""}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="responseTime"
              placeholder="Tempo de Resposta (horas)"
              className="floating-input"
              value={selectedSla?.responseTime || ""}
              onChange={handleInputChange}
            />
            <Button
              text="Salvar Alterações"
              icon={faSave}
              background="#11344d"
              hoverColor="#335577"
              borderRadius="5px"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SlaSettings
