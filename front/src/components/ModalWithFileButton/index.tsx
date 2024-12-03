import React, { useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import "./styles.css";

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
    <div style={{ borderRadius: "10px" }}>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

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
      console.log("Arquivo selecionado:", selectedFile);
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Incluir arquivo
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className="container-model-anexo">
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
