import { differenceInDays, differenceInHours, differenceInMinutes, parseISO } from "date-fns";

export const getStatusBadgeStyle = (status: string): React.CSSProperties => {
  switch (status.toLowerCase()) {
    case "inativo": // Use "não" em vez de "nao" se o seu dado tiver acentos
      return {
        backgroundColor: "#FF0000", // Shade of red for blocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "ativo": // Use "sim" em vez de "default"
      return {
        backgroundColor: "#8DD600", // Shade of green for unblocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback to green
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};

export const getBlockedStatusBadgeStyle = (
  statusBlock: string
): React.CSSProperties => {
  switch (statusBlock.toLowerCase()) {
    case "sim": // Use "não" em vez de "nao" se o seu dado tiver acentos
      return {
        backgroundColor: "#FF0000", // Shade of red for blocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "nao": // Use "sim" em vez de "default"
      return {
        backgroundColor: "#8DD600", // Shade of green for unblocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback to green
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};

export const getStatusTicketBadgeStyle = (
  statusTicket: string
): React.CSSProperties => {
  switch (statusTicket.toUpperCase()) {
    case "OPEN":
      return {
        backgroundColor: "#007BFF", // Azul para status de "Aberto"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "IN_PROGRESS":
      return {
        backgroundColor: "#FFC107", // Amarelo para "Em Progresso"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "FROZEN":
      return {
        backgroundColor: "#6C757D", // Cinza para "Congelado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "CANCELED":
      return {
        backgroundColor: "#DC3545", // Vermelho para "Cancelado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "FINISHED":
      return {
        backgroundColor: "#28A745", // Verde para "Finalizado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback padrão verde
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};


export function calculateRemainingTime(dueDate: string): string {
  // Converte a string de data fornecida para um objeto Date
  const dueDateObj = parseISO(dueDate);
  const currentDate = new Date();

  // Calcula a diferença de tempo em minutos
  const differenceMinutes = differenceInMinutes(dueDateObj, currentDate);
  const differenceHours = differenceInHours(dueDateObj, currentDate);
  const differenceDays = differenceInDays(dueDateObj, currentDate);

  // Calcula os minutos restantes após calcular as horas
  const remainingMinutes = Math.abs(differenceMinutes - (differenceHours * 60));
  
  // Formata a diferença em uma string no formato "x dias, x horas e x minutos"
  const daysString = differenceDays > 0 ? `${differenceDays} dias, ` : '';
  const hoursString = `${Math.abs(differenceHours)} horas `;
  const minutesString = `${remainingMinutes} minutos`;

  const sign = differenceMinutes < 0 ? '-' : '';

  return `${sign}${daysString}${hoursString}${minutesString}`;
}


export const formatDate = (date: Date | string) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Data inválida";
  }

  return parsedDate.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(',', '');
};



