export const formatDate = (date: Date | string) => {
    const parsedDate = new Date(date);
  
    // Verificar se parsedDate é uma data válida
    if (isNaN(parsedDate.getTime())) {
      return "Data inválida";
    }
  
    return parsedDate.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(',', ''); // Remover a vírgula
  };