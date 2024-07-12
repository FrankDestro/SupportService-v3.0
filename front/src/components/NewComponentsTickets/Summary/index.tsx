import './styles.css';
import SummaryIcon from '../../../assets/summary.png';
import chronometer from "../../../assets/chronometer.png";


function Summary() {
    return (
        <div>
            <ul className="ticket-details-summary">
                <div className="title-summary">
                    <img src={SummaryIcon} alt="summaryIcon"
                    width="25px"
                    height="20px"
                         style={{marginRight : "10px", marginBottom: "5px"}}
                    />
                    <li><span>Summary</span></li>
                </div>

                <li><span>Número Ticket:</span> # 1</li>
                <li><span>Assunto:</span> Internet lenta</li>
                <li><span>Cliente:</span> Administração</li>
                <li><span>Solicitante:</span> Amanda Oliveira</li>
                <li><span>Contato:</span> (19) 8978-6745</li>
                <li><span>Email Solicitante:</span> amanda.oliveira@gmail.com</li>
                <li><span>Responsável:</span> null null</li>
                <li><span>Departamento:</span> Area solucionadora</li>
                <li><span>Data de Abertura:</span> 20/03/2024 06:15</li>
                <li><span>Data Final:</span> 20/03/2024 07:15</li>
                <li><span>Data de Encerramento:</span> 31/12/1969 21:00</li>

                <li style={{display: "flex" ,justifyContent: "space-between", width:"100%"}}>
                    <span>Tempo Restante:</span> -2744 horas 49 minutos <img src={chronometer} alt="alt" width="30px"/>
                </li>

                <li><span>Grupo Categoria:</span> Rede</li>
                <li><span>Tipo Solicitação:</span> Problema</li>
                <li><span>Criticidade:</span> <span style={{border: "1px solid red", padding: "2px" ,background: "red" ,borderRadius: "5px", color:"white"}}>ALTA</span></li>
                <li><span>Status do Ticket:</span> <span style={{border: "1px solid green", padding: "2px" ,background: "green" ,borderRadius: "5px", color:"white"}}>OPEN</span></li>
            </ul>
        </div>
    )
}

export default Summary
