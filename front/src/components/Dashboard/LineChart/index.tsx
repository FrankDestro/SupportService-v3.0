import Chart from "react-google-charts";

const data = [
  ["Hora", "SLA", { role: 'style' }],
  ["00:00", 90, ''],
  ["01:00", 85, ''],
  ["02:00", 10, 'red'], 
];

const options = {
  title: "Desempenho de SLA ao Longo do Tempo",
  curveType: "function",
  legend: { position: "bottom" },
  hAxis: {
    title: "Hora",
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
