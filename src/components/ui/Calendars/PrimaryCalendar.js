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
<<<<<<< HEAD
        <div class="calendar-container">
            <div class="calendar-hearder">
            <div class="calendar-date">Dom</div>
            <div class="calendar-date">Lun</div>
            <div class="calendar-date">Mar</div>
            <div class="calendar-date">Mie</div>
            <div class="calendar-date">Jue</div>
            <div class="calendar-date">Vie</div>
            <div class="calendar-date">Sab</div>
            </div>
            <div class="calendar-body">
                <div class="calendar-date is-disbled"><button class="date-item">25</button></div>
                <div class="calendar-date is-disbled"><button class="date-item">26</button></div>
                <div class="calendar-date is-disbled"><button class="date-item">27</button></div>
                <div class="calendar-date is-disbled"><button class="date-item">28</button></div>
                <div class="calendar-date is-disbled"><button class="date-item">29</button></div>
                <div class="calendar-date is-disbled"><button class="date-item">30</button></div>
                <div class="calendar-date"><button class= "date-item">1</button></div>
                <div class="calendar-date"><button class= "date-item">2</button></div>
                <div class="calendar-date"><button class= "date-item">3</button></div>
                <div class="calendar-date"><button class= "date-item">4</button></div>
                <div class="calendar-date"><button class= "date-item">5</button></div>
                <div class="calendar-date"><button class= "date-item">6</button></div>
                <div class="calendar-date"><button class= "date-item">7</button></div>
                <div class="calendar-date"><button class= "date-item">8</button></div>
                <div class="calendar-date"><button class= "date-item">9</button></div>
                <div class="calendar-date"><button class= "date-item">10</button></div>
                <div class="calendar-date"><button class= "date-item">11</button></div>
                <div class="calendar-date"><button class= "date-item">12</button></div>
                <div class="calendar-date"><button class= "date-item">13</button></div>
                <div class="calendar-date"><button class= "date-item">14</button></div>
                <div class="calendar-date"><button class= "date-item">15</button></div>
                <div class="calendar-date"><button class= "date-item">16</button></div>
                <div class="calendar-date"><button class= "date-item">17</button></div>
                <div class="calendar-date"><button class= "date-item">18</button></div>
                <div class="calendar-date"><button class= "date-item">19</button></div>
                <div class="calendar-date"><button class= "date-item">20</button></div>
                <div class="calendar-date"><button class= "date-item">21</button></div>
                <div class="calendar-date"><button class= "date-item">22</button></div>
                <div class="calendar-date"><button class= "date-item">23</button></div>
                <div class="calendar-date"><button class= "date-item">24</button></div>
                <div class="calendar-date"><button class= "date-item">25</button></div>
                <div class="calendar-date"><button class= "date-item">26</button></div>
                <div class="calendar-date"><button class= "date-item">27</button></div>
                <div class="calendar-date"><button class= "date-item">28</button></div>
                <div class="calendar-date"><button class= "date-item">29</button></div>
                <div class="calendar-date"><button class= "date-item">30</button></div>
                <div class="calendar-date"><button class= "date-item">31</button></div>
                <div class="calendar-date is-disabled"><button class= "date-item">1</button></div>
                <div class="calendar-date is-disabled"><button class= "date-item">2</button></div>
                <div class="calendar-date is-disabled"><button class= "date-item">3</button></div>
                <div class="calendar-date is-disabled"><button class= "date-item">4</button></div>
                <div class="calendar-date is-disabled"><button class= "date-item">5</button></div>
            </div>
        </div>
       </div>
       </div>
    )
}
=======
      </div>
    </div>
  );
};
>>>>>>> origin/feature/vista-calendar
