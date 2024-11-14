/* eslint-disable react-refresh/only-export-components */
import { Chart } from "react-google-charts";

export const data = [
  ["Urgência", "Quantidade de Chamados"],
  ["Crítico", 15], // Chamados críticos
  ["Alta", 40], // Chamados de alta urgência
  ["Média", 30], // Chamados de urgência média
  ["Baixa", 10], // Chamados de baixa urgência
];

export const options = {
  title: "Estatística de Chamados por Urgência",
  is3D: true,
  slices: {
    0: { offset: 0.1 },
    1: { offset: 0.1 },
    2: { offset: 0.1 },
  },
};

function PieChartByUrgency() {
  return (
    <div className="base-card-charts">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default PieChartByUrgency;
