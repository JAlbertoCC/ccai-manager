import React, { useState } from "react";

//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { PrimaryCalendar } from "../components/ui/Calendars/PrimaryCalendar";


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = [ 'Enero, Febrero, Marzo, Abril, Mayo'];

    return (
        <div className='container register-content'>
          <HeaderComponent title='Calendario CCAI'/>
          <PrimaryCalendar />
            
          
        </div>
    )
}
export default Calendar
