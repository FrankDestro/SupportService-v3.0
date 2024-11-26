import LineChartSupportByDay from "../Dashboard/LineChartSupportByDay/LineChartSupportByDay";
import PieChartByUrgency from "../Dashboard/PieChartByUrgency/PieChartByUrgency";
import PieChartDonutByStatusTicket from "../Dashboard/PieChartDonutByStatusTicket/PieChartDonutByStatusTicket";
import SlaIndicators from "../Dashboard/SlaIndicators/SlaIndicators";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./ActivityPanel.css";

function ActivityPanel() {
  return (
    <div>
      <div className="container-base">
        <SearchPanel />
      </div>

      {/* Resumo dos Chamados */}
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

        <div className="container-all-charts">
          {/* Gráficos de Distribuição e Urgência dos Chamados */}
          <div className="container-charts">
            <div className="content-pie-chart-donuts-tickets">
              <PieChartDonutByStatusTicket />
            </div>
            <div className="content-pie-chart-donuts-tickets">
              <PieChartByUrgency />
            </div>
          </div>

          {/* Indicadores de SLA */}
          <div className="container-base sla-panel">
            <SlaIndicators />
          </div>

          <div className="container-base sla-panel">
            <LineChartSupportByDay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPanel;
