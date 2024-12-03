import './styles.css';
import Summary from "../Summary";
import TimeLine from "../TicketsTimeline";

function NewDetailsTickets() {
    return (
        <div className="container-ticket-details">
            <div className="container-ticket-details-left">
                <div className="card-tickets container-content-timeline">
                    <TimeLine/>
                </div>
                <div className="card-tickets container-content-addprogress">
                    addProgress
                </div>
            </div>
            <div className="container-ticket-details-right">
                <div className="card-tickets container-content-summary">
                    <Summary/>
                </div>
            </div>
        </div>
    );
}

export default NewDetailsTickets;
