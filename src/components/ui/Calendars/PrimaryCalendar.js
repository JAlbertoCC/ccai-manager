import React from 'react';
import { startOfMonth, getDay } from 'date-fns';


export const PrimaryCalendar = (props) => {
  const { previousMonth, nextMonth, months, currentDate, daysOfWeek, daysInMonth } = props;

  const daysOfMonth = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const firstDayOfMonth = getDay(startOfMonth(currentDate));


  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="calendar">
            <div className="calendar-nav">
              <button className="button is-text is-small" onClick={previousMonth}>
                Anterior
              </button>
              <button className="button is-text is-small" onClick={nextMonth}>
                Siguiente
              </button>
            </div>
            <div className="calendar-title">
              <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            </div>
          </div>
          <div className="calendar-body">
            <div className="calendar-weekdays">
              {daysOfWeek.map((day, index) => (
                <div className="calendar-weekday" key={index}>{day}</div>
              ))}
            </div>
            <div className="calendar-days">
              {[...Array(firstDayOfMonth)].map((_, index) => (
                <div className="calendar-day" key={`empty-${index}`} />
              ))}
              {daysOfMonth.map((day) => (
                <div className="calendar-day" key={day}>{day}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
