import React from 'react';

const Tabela: React.FC = () => {

  const chamados = [
    { id: 1, titulo: 'Problema na rede', solicitante: 'João', problema: 'Conexão instável' },
    { id: 2, titulo: 'Erro no sistema', solicitante: 'Maria', problema: 'Não consigo fazer login' },
    { id: 3, titulo: 'Hardware defeituoso', solicitante: 'Carlos', problema: 'Problema no monitor' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Solicitante</th>
          <th>Problema</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {chamados.map((chamado) => (
          <tr key={chamado.id}>
            <td>{chamado.id}</td>
            <td>{chamado.titulo}</td>
            <td>{chamado.solicitante}</td>
            <td>{chamado.problema}</td>
            <td>
              <span role="img" aria-label="Detalhes">
                🔍
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
