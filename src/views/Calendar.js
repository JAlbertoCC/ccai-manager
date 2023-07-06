import React, { useState } from "react";
import ReactDOM from 'react-dom';
//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { PrimaryCalendar } from "../components/ui/Calendars/PrimaryCalendar";


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  
  const previousMonth = () => {
    const previousDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(previousDate);
  };

  const nextMonth = () => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextDate);
  };

 

    return (
        <div className='container register-content'>
          <HeaderComponent title='Calendario CCAI'/>
          <PrimaryCalendar 
             previousMonth={previousMonth}
             nextMonth={nextMonth}
             months={months}
             currentDate={currentDate}
             daysOfWeek={daysOfWeek}
             
          />
        </div>
    )
}


export default Calendar
