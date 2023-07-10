import React, { useState } from "react";
import { HeaderComponent } from './../components/ui/Header/HeaderComponent';
import { PrimaryCalendar } from "../components/ui/Calendars/PrimaryCalendar";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const previousMonth = () => {
    const previousMonth = currentDate.getMonth() - 1;
    const previousYear = currentDate.getFullYear();
    let newMonth = previousMonth;
    let newYear = previousYear;

    if (previousMonth < 0) {
      newMonth = 11;
      newYear = previousYear - 1;
    }

    const daysInMonth = getDaysInMonth(newYear, newMonth);
    const previousDate = new Date(newYear, newMonth, Math.min(currentDate.getDate(), daysInMonth));
    setCurrentDate(previousDate);
  };

  const nextMonth = () => {
    const nextMonth = currentDate.getMonth() + 1;
    const nextYear = currentDate.getFullYear();
    let newMonth = nextMonth;
    let newYear = nextYear;

    if (nextMonth > 11) {
      newMonth = 0;
      newYear = nextYear + 1;
    }

    const daysInMonth = getDaysInMonth(newYear, newMonth);
    const nextDate = new Date(newYear, newMonth, Math.min(currentDate.getDate(), daysInMonth));
    setCurrentDate(nextDate);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <div className='container register-content'>
      <HeaderComponent title='Calendario CCAI' />
      <PrimaryCalendar
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        months={months}
        currentDate={currentDate}
        daysOfWeek={daysOfWeek}
        daysInMonth={getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())}
      />
    </div>
  );
};

export default Calendar;
