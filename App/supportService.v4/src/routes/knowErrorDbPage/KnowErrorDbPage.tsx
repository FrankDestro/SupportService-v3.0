import { useEffect, useState } from "react";
import KEDBSearch from "../../components/KEDBSearch/KEDBSearch";
import TableKnowError from "../../components/TableKnowError/TableKnowError";
import { errors } from "../../mocks/KnowErrosData"; // Importando os dados
import { knowErrorSimpleDTO } from "../../models/knowErrorDTO";
import * as knowErrorService from "../../Service/Kow-error-service";

type QueryParams = {
  page: number;
  titleText: string;
  rootCauseText: string;
  solution: string;
  status: string;
  initialDate: string;
  finalDate: string;
  initialDateResolution: string;
  finalDateResolution: string;
  tags: string[];
};

function KnowErrorDbPage() {
  const [knowErros, setKnowErros] = useState<knowErrorSimpleDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    titleText: "",
    rootCauseText: "",
    solution: "",
    status: "",
    initialDate: "",
    finalDate: "",
    initialDateResolution: "",
    finalDateResolution: "",
    tags: [],
  });

  // Função que recebe os dados do formulário e atualiza o estado
  function handleSearch(formData: {
    titleText: string;
    rootCauseText: string;
    solution: string;
    status: string;
    initialDate: string;
    finalDate: string;
    initialDateResolution: string;
    finalDateResolution: string;
    tags: string[];
  }) {
    // Atualizando os parâmetros de consulta com os dados do formulário
    setQueryParams((prev) => ({
      ...prev,
      ...formData, // Adicionando os valores do formulário
      page: prev.page, // Mantendo a página atual
    }));
  }

  useEffect(() => {
    knowErrorService.allKownErrorRequest(
      queryParams.page,
      queryParams.titleText,
      queryParams.rootCauseText,
      queryParams.solution,
      queryParams.status,
      queryParams.initialDate,
      queryParams.finalDate,
      queryParams.initialDateResolution,
      queryParams.finalDateResolution,
      queryParams.tags
    ).then((response) => {
      const { totalPages, content } = response.data;
      setTotalPages(totalPages);
      setKnowErros(content);
    })
  }, [queryParams]);


  console.log(knowErros)

  return (
    <>
      <div className="container-base">
        <KEDBSearch onSearch={handleSearch} />
      </div>
      <TableKnowError knowerros={errors} />
    </>
  );
}

export default KnowErrorDbPage;