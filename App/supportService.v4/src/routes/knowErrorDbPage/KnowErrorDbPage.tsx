import KEDBSearch from "../../components/KEDBSearch/KEDBSearch";
import TableKnowError from "../../components/TableKnowError/TableKnowError";
import { errors } from '../../mocks/KnowErrosData';  // Importando os dados



function KnowErrorDbPage() {
  return (
    <>
      <div className="container-base">
        <KEDBSearch />
      </div>
      <TableKnowError knowerros={errors} />
    </>
  );
}

export default KnowErrorDbPage;
