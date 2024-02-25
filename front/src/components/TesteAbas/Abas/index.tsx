import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Tabela from './TableTeste'

const counteudos = [
   'Conteudo 1',
   'Conteudo 2',
   'Conteudo 3',
   'Conteudo 4',
   'Conteudo 5',
   'AQUI E PARA ABRIR UM NOVO TICKET',
]

export default function Abas() {
  
  const [abaAtiva, setAbaAtiva] = React.useState(0)

  return (
    <React.Fragment>
      <ListGroup horizontal>
        <ListGroup.Item onClick={() => setAbaAtiva(0)} variant={abaAtiva === 0 ? 'primary' : 'info'} style={{ background: 'lightblue', cursor: "pointer"}}>Tickets</ListGroup.Item>
        <ListGroup.Item onClick={() => setAbaAtiva(1)} variant={abaAtiva === 1 ? 'primary' : 'info'} style={{ background: 'white', cursor: "pointer" }}>teste 2</ListGroup.Item>
        <ListGroup.Item onClick={() => setAbaAtiva(2)} variant={abaAtiva === 2 ? 'primary' : 'info'} style={{ background: 'white' , cursor: "pointer"}}>teste 3</ListGroup.Item>
        <ListGroup.Item onClick={() => setAbaAtiva(3)} variant={abaAtiva === 3 ? 'primary' : 'info'} style={{ background: 'white' , cursor: "pointer"}}>teste 4</ListGroup.Item>
        <ListGroup.Item onClick={() => setAbaAtiva(4)} variant={abaAtiva === 4 ? 'primary' : 'info'} style={{ background: 'white' , cursor: "pointer"}}>teste 5</ListGroup.Item>
        <ListGroup.Item onClick={() => setAbaAtiva(5)} variant={abaAtiva === 5 ? 'primary' : 'info'} style={{ background: 'white', cursor: "pointer" }}>+ New Ticket</ListGroup.Item>
      </ListGroup>

      <Card>
        <Card.Header>
          <Card.Title as="h4">Mudar o conteúdo aqui</Card.Title>
          <p className="card-category">
            {counteudos[abaAtiva]}
          </p>
        </Card.Header>
        <Card.Body style={{width : "100%", height: "70vh"}}>
          {abaAtiva === 0 ? <Tabela /> : <p>Outro conteúdo aqui</p>}
        </Card.Body>
      </Card>
  </React.Fragment>
  );
}