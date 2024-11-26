import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import * as CategoryTicketService from "../../Service/category-service";
import * as SlaService from "../../Service/sla-service";
import * as TicketService from "../../Service/ticket-service";
import * as TypeRequestService from "../../Service/type-request";
import * as AttachmentService from "../../Service/attachment-service";
import { CategoryTicketDTO } from "../../models/CategoryTicketDTO";
import { SLADTO } from "../../models/slaDTO";
import { TypeRequestDTO } from "../../models/typeRequestDTO";
import { cleanDescription, toValuesTicket } from "../../utils/functions";
import Button from "../Button/Button";
import "./TicketFormCreate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { AttachmentsDTO } from "../../models/AttachmentsDTO";

function TicketFormCreate() {
  const [typeRequests, setTypeRequests] = useState<TypeRequestDTO[]>([]);
  const [categoryTicket, setCategoryTicket] = useState<CategoryTicketDTO[]>([]);
  const [slaList, setSlaList] = useState<SLADTO[]>([]);

  // Novo estado para anexos
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  useEffect(() => {
    TypeRequestService.getAllTypeRequest().then((response) => {
      setTypeRequests(response.data);
    });

    CategoryTicketService.getAllCategoryTicket().then((response) => {
      setCategoryTicket(response.data);
    });

    SlaService.getAllSla().then((response) => {
      setSlaList(response.data);
    });
  }, []);

  // Função para lidar com anexos de arquivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setAttachedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  // Função para remover um anexo
  const handleRemoveFile = (index: number) => {
    setAttachedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Função para exibir os arquivos anexados
  const renderAttachedFiles = () => {
    return attachedFiles.map((file, index) => (
      <div key={index} className="file-preview">
        <FontAwesomeIcon icon={faFile} />
        <p>{file.name}</p>
        <button
          type="button"
          className="remove-file-button"
          onClick={() => handleRemoveFile(index)}
        >
          X
        </button>
      </div>
    ));
  };

  console.log(attachedFiles);

  // Estado do formulário com dados iniciais
  const [formData, setFormData] = useState({
    description: "",
    typeRequest: "",
    categoryTicket: "",
    sla: "",
    subject: "",
    parentTicketId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const requestBody = toValuesTicket(formData);

    const description = cleanDescription(formData.description);

    setFormData({ ...formData, description: description });

    TicketService.createTicket(requestBody)
      .then((response) => {
        console.log(response.data.id);

        if (attachedFiles.length !== 0) {
          attachedFiles.forEach((file) => {
            const attachmentData = {
              url: `https://example.com/path/to/your/${file.name}`,
              fileName: file.name,
              type: file.type.split("/")[1].toUpperCase(),
              ticketId: response.data.id,
            } as AttachmentsDTO; // Cast para o tipo esperado

            AttachmentService.addAttachments(attachmentData);
          });
        }
      })
      .catch((e) => {
        console.log(e + " erro");
      });
  }

  return (
    <div className="container-ticket-form-create">
      <form onSubmit={handleSubmit}>
        <div className="ticket-form-container">
          {/* container do formulário */}
          <div className="ticket-form-fields">
            {/* Linha de assunto e descrição */}
            <div className="ticket-form-row">
              <div className="ticket-form-item">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto/ Titulo do problema"
                  className="floating-input"
                />
              </div>

              {/* Categoria de Ticket */}
              <div className="ticket-form-item">
                <label htmlFor="categoryTicket">Categoria</label>
                <select
                  name="categoryTicket"
                  value={formData.categoryTicket}
                  onChange={handleChange}
                >
                  <option value="">Todas Categorias</option>
                  {categoryTicket.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.id} - {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ticket-form-item">
                <label htmlFor="referencia">Referencia</label>
                <input
                  type="number"
                  name="parentTicketId"
                  value={formData.parentTicketId}
                  onChange={handleChange}
                  placeholder="Id ticket referencia"
                  className="floating-input"
                />
              </div>
            </div>
            <div className="ticket-form-row">
              <div className="ticket-form-item">
                <label htmlFor="typeRequest">Tipo de Solicitação</label>
                <select
                  name="typeRequest"
                  value={formData.typeRequest}
                  onChange={handleChange}
                >
                  <option value="">Todos Tipos requisição</option>
                  {typeRequests.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.id} - {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ticket-form-item">
                <label htmlFor="sla">Criticidade</label>
                <select name="sla" value={formData.sla} onChange={handleChange}>
                  <option value="">Todas SLA</option>
                  {slaList.map((sla) => (
                    <option key={sla.id} value={sla.id}>
                      {sla.severity}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="ticket-form-item">
              <label htmlFor="description">Descrição</label>
              <ReactQuill
                id="description"
                value={formData.description}
                onChange={(value: string) =>
                  setFormData({ ...formData, description: value })
                }
                className="custom-quill"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ align: [] }],
                    ["bold", "italic", "underline"],
                    ["link"],
                    [{ color: [] }, { background: [] }],
                    ["image"],
                    ["blockquote"],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    ["clean"],
                  ],
                }}
              />
            </div>
            <div className="ticket-form-item">
              <label htmlFor="fileUpload" className="custom-upload-button">
                Anexos
              </label>
              <input
                type="file"
                id="fileUpload"
                name="files"
                multiple
                className="profile-image-input"
                onChange={handleFileChange}
              />
              <div className="attached-files-container">
                {renderAttachedFiles()}
              </div>
            </div>
            <Button
              text="Criar Ticket"
              icon={faDatabase}
              background="#11344d"
              type="submit"
              width="200px"
              borderRadius="5px"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TicketFormCreate;
