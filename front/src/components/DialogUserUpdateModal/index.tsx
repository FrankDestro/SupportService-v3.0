import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import UserForm from "../UserForm";
import "./styles.css";

type Props = {
    onDialogClose: Function
    customComponent?: ReactNode;
}

function DialogUserUpdateModal({ onDialogClose }: Props) {

    return (
        <div className="ss-dialog-background">
            <div className="ss-dialog-box base-card" onClick={(event) => event.stopPropagation()}>
                <button onClick={() => onDialogClose()} className="button-close"> 
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <UserForm />
            </div>
        </div>
    )
}

export default DialogUserUpdateModal;
