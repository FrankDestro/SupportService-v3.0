import { Button } from "react-bootstrap";

function SummaryTickets() {
  return (
    <aside className="border p-3">
      <h5>Resumo de Tickets</h5>
      <p>Total de Chamados: 50</p>
      <p>Chamados em Aberto: 15</p>
      <p>Chamados Aguardando Ação: 8</p>
      <p>Chamados Atribuídos à Minha Equipe: 20</p>
      <p>Chamados Cancelados: 5</p>
      <p>Chamados Finalizados com Sucesso: 25</p>
      <Button variant="primary" className="mt-3" disabled>
        Atualizar Resumo
      </Button>
    </aside>
  );
}

export default SummaryTickets;
