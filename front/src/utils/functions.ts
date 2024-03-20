import { differenceInDays, differenceInHours, differenceInMinutes, parseISO } from "date-fns";

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



