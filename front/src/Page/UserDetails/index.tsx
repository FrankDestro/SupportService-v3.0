import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarTitle from "../../components/CardTitle";
import UserDetailsData from "../../components/UserDetailsData";
import { UserDTO } from "../../models/users";
import * as userService from "../../services/user-service";


function UserDetails() {

    const [user, setUser] = useState<UserDTO>();
    const params = useParams();

    useEffect(() => {
        userService.findUserById(Number(params.userId))
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="app-container-content">
            <CarTitle text="Detalhes do Usuário" icon={faUser} />
            {user && <UserDetailsData user={user} />}
        </div>
    );
}

export default UserDetails;
