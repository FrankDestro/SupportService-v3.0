import { useEffect, useState } from "react";
import * as departmentService from "../../Service/department-service";
import * as rolesService from "../../Service/role-service";
import * as solvingAreaService from "../../Service/solving-area";
import { DepartmentDTO } from "../../models/DepartmentDTO";
import { RoleDTO } from "../../models/RoleDTO";
import { SolvingAreaDTO } from "../../models/solvingAreaDTO";
import "./UserFormCreate.css";

type Props = {
  onSubmit: (formData: FormData) => void;
};

function UserFormCreate({ onSubmit }: Props) {
  
  // requisição
  const [solvingAreas, setSolvingAreas] = useState<SolvingAreaDTO[]>([]);
  const [departments, setDepartments] = useState<DepartmentDTO[]>([]);
  const [roles, setRoles] = useState<RoleDTO[]>([]);

  useEffect(() => {
    departmentService.getAllDepartment().then((response) => {
      setDepartments(response.data);
    });
  }, []);

  useEffect(() => {
    solvingAreaService.getAllSolvingArea().then((response) => {
      setSolvingAreas(response.data);
    });
  }, []);

  useEffect(() => {
    rolesService.getAllRoles().then((response) => {
      setRoles(response.data);
    });
  }, []);

  //Inputs
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [areaSolucionadora, setAreaSolucionadora] = useState("");
  const [departmento, setDepartmento] = useState("");
  const [permissao, setPermissao] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Define a URL da imagem
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setPermissao(selectedValues);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("não esta mandando e esta certo")
  }

  return (
    <div className="container-user-form-create">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          {/* container do profile */}
          <div className="profile-photo-container">
            <div className="profile-image-circle">
              {image ? (
                <img src={image} alt="Profile" className="profile-image" />
              ) : (
                <span className="profile-image-placeholder">Add Image</span>
              )}
            </div>
            <label htmlFor="imgProfile" className="custom-upload-button">
              Adicionar Foto
            </label>
            <input
              type="file"
              id="imgProfile"
              onChange={handleImageChange}
              className="profile-image-input"
            />
          </div>
          {/* container do profile */}

          {/* container do formulário */}
          <div className="form-fields">
            <div className="form-row">
              <div className="form-item">
                <label htmlFor="firstName">Nome</label>
                <input
                  type="text"
                  id="firstName"
                  className="floating-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-item">
                <label htmlFor="lastName">Sobrenome</label>
                <input
                  type="text"
                  id="lastName"
                  className="floating-input"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="floating-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-item">
                <label htmlFor="contactNumber">Número de contato</label>
                <input
                  type="text"
                  id="contactNumber"
                  placeholder="dd + numero"
                  className="floating-input"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="form-item">
              <label htmlFor="department">Departamento</label>
              <select
                value={departmento}
                onChange={(e) => setDepartmento(e.target.value)}
              >
                <option value="">Selecione</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.description}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-item">
              <label htmlFor="solvingArea">Área Solucionadora</label>
              <select
                value={areaSolucionadora}
                onChange={(e) => setAreaSolucionadora(e.target.value)}
              >
                <option value="">Selecione</option>
                {solvingAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
             <button type="submit">tes</button>
            <div className="form-item">
              <label>Permissões</label>
              <select multiple value={permissao} onChange={handleSelectChange}>
                <option value="" disabled>
                  Selecione
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.authority}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserFormCreate;
