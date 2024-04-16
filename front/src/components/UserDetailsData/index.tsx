import { Link } from "react-router-dom";
import editIcon from "../../assets/edit.svg";
import unlock from "../../assets/unlock.svg";
import { UserDTO } from "../../models/users";
import Button from "../Button";
import './styles.css';

type Props = {
    user: UserDTO
}

function UserDetailsData({ user }: Props) {
 
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5 container-userdetails base-card">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src={user.imgProfile} /><span className="font-weight-bold">{user.firstName + " " + user.lastName}</span>
                            <span className="text-black-50">{user.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Informações de Usuário</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Nome :</label><h3>{user.firstName}</h3></div>
                                <div className="col-md-6"><label className="labels">Sobrenome : </label><h3>{user.lastName}</h3></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Numero de Contato : </label><h3>{user.contactNumber}</h3></div>
                                <div className="col-md-12"><label className="labels">Email :</label><h3>{user.email}</h3></div>
                                <div className="col-md-12"><label className="labels">Departamento :</label><h3>{user.department.description}</h3></div>
                                <div className="col-md-12"><label className="labels">Data criação :</label><h3>{user.createdAt}</h3></div>
                                <div className="col-md-12"><label className="labels">Criado por : </label><h3>{user.createdByUserName}</h3></div>
                            </div>
                            <div className="mt-5 text-center">
                                <Button text="Editar" icon={editIcon} background="var(--button-bg-blue)" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span></span>
                                <Link to="/users">
                                    <Button text="Voltar" icon={editIcon} background="var(--button-bg-blue)" />
                                </Link>
                            </div>
                            <div className="col-md-3"><label className="labels">Status :</label> <h3 className={user.status === 'ACTIVE' ? 'container-status-active' : 'container-status-noactive'}>
                                {user.status}
                            </h3>
                            </div>
                            <div className="col-md-12"><label className="labels">Tipo de Permisão :</label>
                                {user.roles.map((role) => (
                                    <div key={role.authority}>
                                        {role.authority.split('_')[1].charAt(0).toUpperCase() + role.authority.split('_')[1].slice(1).toLowerCase()}
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6"><label className="labels">Bloqueio:</label>
                                {user.failedLoginAttempts === 5
                                    ?
                                    <div>
                                        <p>Usuário bloqueado</p>
                                        <Button text="Desbloquear" icon={unlock} background="var(--button-bg-red)" />
                                    </div>
                                    :
                                    <h3>Usuário Desbloqueado</h3>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsData
