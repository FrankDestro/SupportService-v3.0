import Button from "../../components/Button";
import editIcon from "../../assets/edit.svg";

function Home() {
  return (
    <div>
      <div className="app-container-content">
      <Button text="Editar" icon={editIcon} background="var(--button-bg-blue)" />
      </div>
    </div>
  );
}

export default Home;
