import React from 'react';
//import bulmaCalendar from 'bulma-calendar';

export const PrimaryCalendar = () => {

    return (
        <div className="column is-4">
       <div className= "calendar" >
        <div className ="calendar-nav">
            <div className = "calendar-nav-left">
               <button className="button is-link">
               <i className="fa fa-chevron-left"></i>
               </button>
            </div>
            <div>Julio 2023</div>
            <div className="calendar-nav-rigth">
            <button className="button is-link">
            <i className="fa fa-chevron-left"></i>
           </button>
            </div>
        </div>
        <div className="calendar-container">
            <div className="calendar-hearder">
            <div className="calendar-date">Sun</div>
            <div className="calendar-date">Mon</div>
            <div className="calendar-date">Tue</div>
            <div className="calendar-date">Wed</div>
            <div className="calendar-date">Thu</div>
            <div className="calendar-date">Fri</div>
            <div className="calendar-date">Sat</div>
            </div>
            <div className="calendar-body">
                <div className="calendar-date is-disbled"><button className="date-item">25</button></div>
                <div className="calendar-date is-disbled"><button className="date-item">26</button></div>
                <div className="calendar-date is-disbled"><button className="date-item">27</button></div>
                <div className="calendar-date is-disbled"><button className="date-item">28</button></div>
                <div className="calendar-date is-disbled"><button className="date-item">29</button></div>
                <div className="calendar-date is-disbled"><button className="date-item">30</button></div>
                <div className="calendar-date"><button className= "date-item">1</button></div>
                <div className="calendar-date"><button className= "date-item">2</button></div>
                <div className="calendar-date"><button className= "date-item">3</button></div>
                <div className="calendar-date"><button className= "date-item">4</button></div>
                <div className="calendar-date"><button className= "date-item">5</button></div>
                <div className="calendar-date"><button className= "date-item">6</button></div>
                <div className="calendar-date"><button className= "date-item">7</button></div>
                <div className="calendar-date"><button className= "date-item">8</button></div>
                <div className="calendar-date"><button className= "date-item">9</button></div>
                <div className="calendar-date"><button className= "date-item">10</button></div>
                <div className="calendar-date"><button className= "date-item">11</button></div>
                <div className="calendar-date"><button className= "date-item">12</button></div>
                <div className="calendar-date"><button className= "date-item">13</button></div>
                <div className="calendar-date"><button className= "date-item">14</button></div>
                <div className="calendar-date"><button className= "date-item">15</button></div>
                <div className="calendar-date"><button className= "date-item">16</button></div>
                <div className="calendar-date"><button className= "date-item">17</button></div>
                <div className="calendar-date"><button className= "date-item">18</button></div>
                <div className="calendar-date"><button className= "date-item">19</button></div>
                <div className="calendar-date"><button className= "date-item">20</button></div>
                <div className="calendar-date"><button className= "date-item">21</button></div>
                <div className="calendar-date"><button className= "date-item">22</button></div>
                <div className="calendar-date"><button className= "date-item">23</button></div>
                <div className="calendar-date"><button className= "date-item">24</button></div>
                <div className="calendar-date"><button className= "date-item">25</button></div>
                <div className="calendar-date"><button className= "date-item">26</button></div>
                <div className="calendar-date"><button className= "date-item">27</button></div>
                <div className="calendar-date"><button className= "date-item">28</button></div>
                <div className="calendar-date"><button className= "date-item">29</button></div>
                <div className="calendar-date"><button className= "date-item">30</button></div>
                <div className="calendar-date"><button className= "date-item">31</button></div>
                <div className="calendar-date is-disabled"><button className= "date-item">1</button></div>
                <div className="calendar-date is-disabled"><button className= "date-item">2</button></div>
                <div className="calendar-date is-disabled"><button className= "date-item">3</button></div>
                <div className="calendar-date is-disabled"><button className= "date-item">4</button></div>
                <div className="calendar-date is-disabled"><button className= "date-item">5</button></div>
            </div>
        </div>
       </div>
       </div>
    )
}