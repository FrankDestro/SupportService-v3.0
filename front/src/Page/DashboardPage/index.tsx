import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import CarTitle from "../../components/CardTitle";
import Dashboard from "../../components/Dashboard";

function DashboardPage() {
  return (
    <div>
      <div className="app-container-content">
        <CarTitle text="Dashboard" icon={faDashboard} />
                 <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
