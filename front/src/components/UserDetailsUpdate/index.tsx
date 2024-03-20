import { Button, Tooltip } from "@mui/material"
import editar from "../../assets/editar.png"

function UserDetailsUpdate() {
    return (
        <div>

            <Tooltip title="Editar">
                <Button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img src={editar} alt="editar" style={{ width: "25px" }}></img>
                </Button>
            </Tooltip>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            SDSD
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsUpdate
