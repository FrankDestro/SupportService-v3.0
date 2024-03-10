import React, { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

// Componente para selecionar e exibir o nome do arquivo
interface FileInputProps {
  onChange: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <input type="file" onChange={handleFileChange} />
  );
};

// Componente principal
const ModalWithFileButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
  };

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Aqui você pode implementar a lógica de upload do arquivo
      console.log('Arquivo selecionado:', selectedFile);
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
       Incluir arquivo
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: 'white', padding: "10px" }}>
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            Anexar Arquivo
          </Typography>
          <FileInput onChange={handleFileChange} />
          <Button variant="contained" onClick={handleFileUpload} sx={{ mt: 2 }}>
            Enviar
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWithFileButton;
