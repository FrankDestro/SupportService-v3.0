import CardPriority from "../CardPriority";
import SearchDashboard from "../SearchDashboard";
import Piechart3d from "./3d-pie-chart";
import SlaPerformanceChart from "./LineChart";
import SummaryCard from "./SummaryCard";
import Barchart from "./barchart";
import PieChartByArea from "./pie-chart-by-area";
import PieChartDonuts from "./pie-chart-donuts";
import "./styles.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="base-card">
        <SearchDashboard />
      </div>

      <div className="dashboard-content">
        <div className="dashboard">
          <SummaryCard title="Total de Chamados" value="150" icon="📞" />
          <SummaryCard title="Chamados Abertos" value="25" icon="🟢" />
          <SummaryCard title="Chamados Resolvidos" value="125" icon="✅" />
          <SummaryCard
            title="Chamados com SLA Vencido (%)"
            value="10%"
            icon="⏰"
          />
          <SummaryCard title="SLA Cumprido (%)" value="90%" icon="🎯" />
          <SummaryCard title="Chamados Urgentes" value="5" icon="❗" />
          <SummaryCard title="Chamados em Atendimento" value="15" icon="👤" />
        </div>

        <div className="container-all-charts">
          <div className="container-charts">
            <div className="content-chart-summary-tickets">
              <CardPriority />
            </div>
            <div className="content-line-chart-tickets">
              <SlaPerformanceChart />
            </div>
          </div>

          <div className="container-charts">
            <div className="content-pie-chart-tickets">
              <Piechart3d />
            </div>
            <div className="content-bar-chart-tickets">
              <Barchart />
            </div>
          </div>

          <div className="container-charts">
            <div className="content-pie-chart-donuts-tickets">
              <PieChartDonuts />
            </div>
            <div className="content-pie-chart-donuts-tickets">
              <PieChartByArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
