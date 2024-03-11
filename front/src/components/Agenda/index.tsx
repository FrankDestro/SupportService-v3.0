import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";


const events = [
    {
      id: 1,
      title: "Meeting with Client",
      priorityId: 1,
      startDate: "2022-04-10T10:30",
      endDate: "2022-04-10T12:00",
    },
  ];

const FullCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date || value === null) {
      setSelectedDate(value);
    }
  };

  const format24Hours = (hours: number) => {
    const formattedHour = hours % 24 === 0 ? 0 : hours % 24;
    return `${formattedHour.toString().padStart(2, "0")}:00`;
  };

  const renderHourTable = () => {
    if (!selectedDate) {
      return null;
    }

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const hours = Array.from({ length: 24 }, (_, index) => index);

    return (
      <table>
        <thead>
          <tr>
            <th>Horário</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
          <tr>
            <td>Datas</td>
            {daysOfWeek.map((_, index) => {
              const currentDate = new Date(selectedDate);
              currentDate.setDate(
                selectedDate.getDate() - selectedDate.getDay() + index
              );
              return (
                <td key={`date-row-${index}`}>
                  {currentDate.toLocaleDateString()}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={`${selectedDate.toISOString()}-${hour}`}>
              <td>{format24Hours(hour)}</td>
              {daysOfWeek.map((day, index) => {
                const currentDate = new Date(selectedDate);
                currentDate.setDate(
                  selectedDate.getDate() - selectedDate.getDay() + index
                );

                // ---------------------------------------------------------

                //Dados
                const data = selectedDate;
                const horaFormatada = "01:00";


                // let datas: string[] = [];
                // let horas: string[] = [];
                
                // events.forEach((event) => {
                //   const eventStartDate = new Date(event.startDate);
                //   datas.push(eventStartDate.toISOString().split("T")[0]);
                //   horas.push(`${eventStartDate.getHours()}:${eventStartDate.getMinutes()}`);
                // });
                
                // // Agora 'datas' e 'horas' contêm as datas e horas de todos os eventos, respectivamente
                // console.log("Datas:", datas);
                // console.log("Horas:", horas);




                console.log("formato DATA enviado para o shouldHighlightCell2 " + data)
                console.log("formato HORA enviado para o shouldHighlightCell2 "+ horaFormatada)

                function shouldHighlightCell2(data: Date, hora: string): boolean {
                    const shouldHighlightCell =
                      currentDate.toISOString().split("T")[0] ===
                        data.toISOString().split("T")[0] &&
                      format24Hours(hour) === hora;
                  
                    return shouldHighlightCell;
                  }

                return (
                  <td
                    key={`${currentDate.toISOString()}-${hour}-${day}`}
                    style={{
                      backgroundColor: shouldHighlightCell2(data, horaFormatada)
                        ? "red"
                        : "transparent",
                      border: "1px solid #ddd",
                    }}
                  >
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <p>Selected date: {selectedDate?.toLocaleDateString()}</p>
      {renderHourTable()}
    </div>
  );
};

export default FullCalendar;
