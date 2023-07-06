import React from 'react';
//import bulmaCalendar from 'bulma-calendar';

export const PrimaryCalendar = () => {

    return (
        <div class="column is-4">
       <div class= "calendar" >
        <div class ="calendar-nav">
            <div class = "calendar-nav-left">
               <button class="button is-link">
               <i class="fa fa-chevron-left"></i>
      </button>
            </div>
            <div>Julio 2023</div>
            <div class="calendar-nav-rigth">
            <button class="button is-link">
            <i class="fa fa-chevron-left"></i>
           </button>
            </div>
        </div>
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