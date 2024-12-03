import Button from "../../components/Button";
import editIcon from "../../assets/edit.svg";

function UserForm() {
  return (
    <div>


      <div className="container rounded bg-white mt-0 mb-4 container-userdetails" >
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-2"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Cadastrar um novo Usuário</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Nome :</label><input type="text" className="form-control" placeholder="first name" value="" /></div>
                <div className="col-md-6"><label className="labels">Sobrenome :</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Numero de Contato :</label><input type="text" className="form-control" placeholder="enter phone number" value="" /></div>
                <div className="col-md-12"><label className="labels">Email: </label><input type="text" className="form-control" placeholder="enter address line 1" value="" /></div>
                <div className="col-md-12"><label className="labels">Departamento : </label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
              </div>

              <div className="d-flex align-items-center experience mt-5">
                <span></span>
                <Button text="Salvar" icon={editIcon} background="var(--button-bg-blue)" />
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="col-md-12"><label className="labels">Tipo de Permisão : </label><input type="text" className="form-control" placeholder="experience" value="" /></div>
              <div className="col-md-12"><label className="labels">Password</label><input type="text" className="form-control" placeholder="additional details" value="" /></div>
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}

export default UserForm
