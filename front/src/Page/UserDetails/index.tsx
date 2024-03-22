import { faCalendar, faClose, faContactCard, faMailReply, faPlaneDeparture, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateIcon from '@mui/icons-material/Edit';
import { Button, Tooltip } from "@mui/material";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editar from "../../assets/editar.png";
import { UserDTO } from "../../models/users";
import * as userService from "../../services/user-service";
import './styles.css';

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


function Userdetails({user}: any) {


    return (
        <div>
        <Tooltip title="Editar">
            <Button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img src={editar} alt="editar" style={{ width: "25px" }}></img>
            </Button>
        </Tooltip>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog container-model-userdetails">
                <div className="modal-content">
                    <div className="modal-header">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ marginRight: "8px", color: "blue" }}
                            fontSize={20}
                        />
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Detalhes de usuário</h1>
                        <button style={{ marginLeft: "auto" }} data-bs-dismiss="modal" >
                            <FontAwesomeIcon icon={faClose} fontSize={20} />
                        </button>
                    </div>


                    <div className="modal-body">
                        <div className="container text-center">
                            <div className="row" style={{ marginBottom: "30px" }}>
                                <div className="col-12 container-perfil">
                                    <div>
                                        <img src={user?.imgProfile} alt="foto"></img>
                                    </div>
                                    <div>
                                        <h3>{user?.firstName} {user?.lastName}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg border">
                                <div className="px-4 py-2 sm:px-2">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Informações do Usuário
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        This is some information about the user.
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-3 sm:p-0" style={{ display: "flex", justifyContent: "center" }}>
                                    <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
                                                Nome completo
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.firstName} {user?.lastName}
                                            </dd>
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faMailReply} style={{ marginRight: "10px" }} />
                                                Email
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.email}
                                            </dd>
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faContactCard} style={{ marginRight: "10px" }} />
                                                Contato
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.contactNumber}
                                            </dd>
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faPlaneDeparture} style={{ marginRight: "10px" }} />
                                                Departamento
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.department.description}
                                            </dd>
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "10px" }} />
                                                Data de criação
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                11/01/2024
                                            </dd>
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faMailReply} style={{ marginRight: "10px" }} />
                                                Criado por
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.createdByUserName}
                                            </dd>
                                        </div>

                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500" style={{ textAlign: "left" }}>
                                                <FontAwesomeIcon icon={faMailReply} style={{ marginRight: "10px" }} />
                                                Roles
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {user?.roles.map((role: { authority: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                                                    <h3>{role.authority}</h3>
                                                ))}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <Tooltip title="Editar">
                            <Button variant="contained" startIcon={<UpdateIcon />}>
                                Editar
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Userdetails
