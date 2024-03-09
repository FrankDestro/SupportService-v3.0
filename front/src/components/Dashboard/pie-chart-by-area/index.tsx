import { Chart } from "react-google-charts";

export const data = [
  ["Área de Atuação", "Popularity"],
  ["TI", 33],
  ["Networking", 26],
  ["Telecom", 22],
  ["Desenvolvimento", 10], // Below limit.
  ["Outra Área", 9], // Below limit.
];

export const options = {
  title: "Popularidade por Área de Atuação",
  sliceVisibilityThreshold: 0.2, // 20%
};

function PieChartByArea() {
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

export default PieChartByArea;
