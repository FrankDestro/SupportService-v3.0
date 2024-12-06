import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineChartSupportByDay from "../Dashboard/LineChartSupportByDay/LineChartSupportByDay";
import PieChartByUrgency from "../Dashboard/PieChartByUrgency/PieChartByUrgency";
import PieChartDonutByStatusTicket from "../Dashboard/PieChartDonutByStatusTicket/PieChartDonutByStatusTicket";
import SlaIndicators from "../Dashboard/SlaIndicators/SlaIndicators";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./ActivityPanel.css";
import { faBan, faBarsProgress, faCheckCircle, faCircleNotch, faClipboardList, faClock, faCommentDots, faExclamationCircle, faFolderOpen, faHandsHelping, faIceCream, faLockOpen, faPauseCircle, faRedoAlt, faStop, faTasks, faTicket, faTriangleExclamation, faWarning, faX } from "@fortawesome/free-solid-svg-icons";

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
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faClipboardList} color="#6C757D" fontSize={20}/>
              <span className="title-summary-tickets">Total Tickets</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faFolderOpen} color="#FFA726" fontSize={20} />
              <span className="title-summary-tickets">Abertos</span>
            </div>
            <span className="result-summary-tickets">40</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faCheckCircle} color="#66BB6A" fontSize={20} />
              <span className="title-summary-tickets">Resolvidos</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faCommentDots} color="#42A5F5" fontSize={20}/>
              <span className="title-summary-tickets">Em atendimento</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faPauseCircle} color="#B0BEC5" fontSize={20}/>
              <span className="title-summary-tickets">Arguardando</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faBan} color="#EF5350" fontSize={20}/>
              <span className="title-summary-tickets">Cancelados</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faClock} color="#FFCA28" fontSize={20}/>
              <span className="title-summary-tickets">Vencem hoje</span>
            </div>
            <span className="result-summary-tickets">32</span>
          </div>
          <div className="container-base card-summary">
            <div className="container-title-icon">
              <FontAwesomeIcon icon={faExclamationCircle} color="#E57373" fontSize={20}/>
              <span className="title-summary-tickets">Vencidos</span>
            </div>
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
