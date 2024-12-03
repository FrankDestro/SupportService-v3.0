import FolderIcon from "@mui/icons-material/Folder";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { FaFile, FaFileCsv, FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
import ModalWithFileButton from "../ModalWithFileButton";

const dados = [
  {
    nomeArquivo: "Arquivo1.pdf",
    tamanho: "21 MB",
    extensao: "pdf",
    dataHora: "10/03/2024 14:30",
    pessoa: "João",
  },
  {
    nomeArquivo: "Arquivo2.csv",
    tamanho: "11.0 kB",
    extensao: "csv",
    dataHora: "10/03/2024 15:45",
    pessoa: "Maria",
  },
  {
    nomeArquivo: "Imagem1.jpeg",
    tamanho: "44 MB",
    extensao: "jpeg",
    dataHora: "10/03/2024 16:20",
    pessoa: "Carlos",
  },
  {
    nomeArquivo: "Documento.docx",
    tamanho: "134 MB",
    extensao: "docx",
    dataHora: "10/03/2024 17:10",
    pessoa: "Ana",
  },
  {
    nomeArquivo: "Arquivo3.pdf",
    tamanho: "200 MB",
    extensao: "pdf",
    dataHora: "10/03/2024 18:05",
    pessoa: "Pedro",
  },
  {
    nomeArquivo: "Arquivo6.pdf",
    tamanho: "200 MB",
    extensao: "file",
    dataHora: "10/03/2024 18:05",
    pessoa: "Marcos",
  },
];

function getIconByExtension(extension: string) {
  switch (extension) {
    case "pdf":
      return <FaFilePdf style={{ marginRight: "8px", color: 'red', fontSize: '24px'}}/>;
    case "csv":
      return <FaFileCsv style={{ marginRight: '8px', color: 'green', fontSize: '24px' }} />;
      case "jpeg":
      return <FaFileImage style={{ marginRight: "8px", fontSize: '24px'}} />;
    case "docx":
      return <FaFileWord style={{ marginRight: "8px", color: 'blue', fontSize: '24px'}} />
    default:
      return <FaFile style={{ marginRight: "8px", color: 'gray', fontSize: '24px'}} />;
  }
}

const handleVisualizarArquivo = (nomeArquivo: string) => {
  // Implemente a lógica para abrir a visualização do arquivo
  console.log(`Visualizar arquivo: ${nomeArquivo}`);
};

function TabelaAnexos() {
  return (
    <TableContainer component={Paper} style={{ padding: "10px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome do Arquivo</TableCell>
            <TableCell>Data e Hora de Inclusão</TableCell>
            <TableCell>Nome da Pessoa</TableCell>
            <TableCell align="right">Tamanho</TableCell>
            <TableCell align="right">Visualizar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", padding: "0px 10px 0px 0px"  }}>
                  {item.extensao === "folder" ? (
                    <FolderIcon style={{ marginRight: "8px" }} />
                  ) : (
                    getIconByExtension(item.extensao)
                  )}
                  <Typography variant="body1">{item.nomeArquivo}</Typography>
                </div>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{item.dataHora}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{item.pessoa}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" color={'rgb(0, 200, 0)'} fontWeight={700}>{item.tamanho}</Typography>
              </TableCell>
              <TableCell align="right">
                <VisibilityIcon
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => handleVisualizarArquivo(item.nomeArquivo)}
                />
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalWithFileButton/>
    </TableContainer>
  );
}

export default TabelaAnexos;
