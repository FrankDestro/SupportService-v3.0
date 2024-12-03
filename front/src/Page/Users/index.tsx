import { faUsers } from "@fortawesome/free-solid-svg-icons";
import CarTitle from "../../components/CardTitle";
import UserTable from "../../components/UsersTable";

function Users() {
  return (
    <div>
      <div className="app-container-content">
        <CarTitle text="Users" icon={faUsers} />
          <UserTable/>
      </div>
    </div>
  );
}

export default Users;
