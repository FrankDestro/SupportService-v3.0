import { Chart } from "react-google-charts";

const data = [
  ["Data", "SLA"],
  ["2022-03-01", 90],
  ["2022-03-02", 85],
  ["2022-03-03", 92],
  // Adicione mais datas e valores conforme necessário
];

const options = {
  title: "Desempenho de SLA ao Longo do Tempo",
  curveType: "function", // Adiciona suavização à linha
  legend: { position: "bottom" },
  hAxis: {
    title: "Data",
  },
  vAxis: {
    title: "SLA (%)",
    minValue: 0,
    maxValue: 100,
  },
};

function SlaPerformanceChart() {
  return (
    <div className="base-card-charts">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default SlaPerformanceChart;
