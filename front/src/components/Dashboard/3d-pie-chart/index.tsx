import Chart from "react-google-charts";

export const data = [
  ["Status", "Quantidade"],
  ["Chamados Abertos", 11],
  ["Chamados Fechados", 2],
  ["Chamados em Atendimento", 2],
  ["Chamados Cancelados", 2],
];

export const options = {
  title: "Estatísticas de Chamados por status",
  is3D: true,
  legend: { position: "right" }, // Ajuste a posição conforme necessário

};

function Piechart3d() {
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

export default Piechart3d;
