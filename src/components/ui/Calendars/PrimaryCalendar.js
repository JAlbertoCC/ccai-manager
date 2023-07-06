import { render } from '@testing-library/react';
import React from 'react';

export const PrimaryCalendar = (props) => {
    const {previousMonth, nextMonth, months, currentDate,daysOfWeek} = props

    return (
       <div className="container">
        <div className="columns">
           <div className='column is-three-quarters'>
            <div className='calendar'>
                <div className='calendar-nav'>
                    <button className='button is-text is-small' onClick={previousMonth}>
                     Anterior
                    </button>
                    <button className='button is-text is-small' onClick={nextMonth}>
                      Siguiente
                    </button>
                </div>
                <div className='calendar-title'>
                    <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                </div>
            </div>
            <div className='calendar-body'>
                <div className='calendar-weekdays'>
                    {daysOfWeek.map((day, index) => (
                        <div className='calendar-weekday' key={index}>{day}</div>
                    ))}
                </div>
            </div>
            <div className='calendar-days'>
                {render()}
            </div>
           </div>
        </div>
       </div>
    )
}