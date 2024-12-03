import { useEffect, useState } from "react";
import "./DialogUserCreateModal2.css";
import UserFormCreate from "../UserFormCreate/UserFormCreate";
import Button from "../Button/Button";
import { faCancel, faDatabase } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

function DialogUserCreateModal2({ isVisible, onClose }: Props) {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");

    if (modalElement) {
      const bootstrapModal = new window.bootstrap.Modal(modalElement);

      if (isVisible) {
        bootstrapModal.show();
      } else {
        bootstrapModal.hide();
      }
    }
  }, [isVisible]);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    onClose();
  };

  useEffect(() => {
    if (formData) {
      console.log(formData); // Agora os dados serão impressos sempre que formData for atualizado
    }
  }, [formData]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                + Adicionar novo Usuário
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <UserFormCreate onSubmit={handleFormSubmit} />
            </div>
            <div className="modal-footer">
              <div data-bs-dismiss="modal" aria-label="Close" onClick={onClose}>
                <Button
                  text="Cancelar"
                  icon={faCancel}
                  background="#11344d"
                  hoverColor="#335577"
                  width="100%"
                  borderRadius="5px"
                  type="button"
                />
              </div>
              <button
                type="submit"
                form="userForm"
              >
                <Button
                  text="Salvar"
                  icon={faDatabase}
                  background="#11344d"
                  hoverColor="#335577"
                  width="100%"
                  borderRadius="5px"
                  type="submit"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogUserCreateModal2;
