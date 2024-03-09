import { Chart } from "react-google-charts";

export const data = [
  ["Categoria", "Quantidade"],
  ["Hardware", 11],
  ["Software", 2],
  ["Networking", 2],
];

export const options = {
  title: "Estatisticas de chamados por Categoria",
  pieHole: 0.4,
  is3D: false,
};

function PieChartDonuts() {
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

export default PieChartDonuts;
