/* eslint-disable react-refresh/only-export-components */
import { Chart } from "react-google-charts";

export const data = [
  ["Status", "Quantidade"],
  ["Abertos", 40],
  ["Resolvidos", 32],
  ["Vencidos", 18],
  ["Em Atendimento", 15],
  ["Atrasados", 10],
];

export const options = {
  title: "Estatisticas de chamados por Status",
  pieHole: 0.4,
  is3D: true,
  slices: {
    0: { offset: 0.1 },
    1: { offset: 0.1 },
    2: { offset: 0.1 },
  },
};

function PieChartDonutByStatusTicket() {
  return (
    <div className="base-card-charts">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default PieChartDonutByStatusTicket;
