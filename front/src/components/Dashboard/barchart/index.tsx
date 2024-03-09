import { Chart } from "react-google-charts";

export const data = [
  ["Status", "Quantidade", { role: "style" }],
  ["Chamados Abertos", 11, "#4285F4"],
  ["Chamados Fechados", 2, "#34A853"],
  ["Chamados em Atendimento", 2, "#FBBC05"],
  ["Chamados Cancelados", 2, "#EA4335"],
];

export const options = {
  chart: {
    title: "Estatísticas de Chamados",
  },
  legend: { position: "none" },
};

function Barchart() {
  return (
    <div className="base-card-charts">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Barchart;
