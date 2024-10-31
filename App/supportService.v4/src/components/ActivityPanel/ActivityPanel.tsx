import "./ActivityPanel.css";

function ActivityPanel() {
  return (
    <div>
      <div className="container-main-panel">
        <div className="container-main-summary">
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Total Tickets</span>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Abertos</span>
            <span className="result-summary-tickets">40</span>
          </div>
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Resolvidos</span>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Vencidos</span>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Em atendimento</span>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <span className="title-summary-tickets">Vencimentos hoje</span>
            <span className="result-summary-tickets">32</span>
          </div>
        </div>

        <div className="container-base painel-geral">
        <span className="title-panel-tickets">Vencimentos hoje</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityPanel;
