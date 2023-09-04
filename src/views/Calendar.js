import React, { useState } from "react";
import { HeaderComponent } from './../components/ui/Header/HeaderComponent';
import { PrimaryCalendar } from "../components/ui/Calendars/PrimaryCalendar";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";

const Calendar = () => {
  const actividades = [ {
    actividadSemana: "Actividades/semana",
    observaciones: "Observaciones",
    Mes: "Agosto",
    responsables: "Responsable"
  },
  {
    actividadSemana: "Actividades/semana ",
    observaciones: "Observaciones",
    Mes: "Agosto",
    responsables: "Responsable"
  },
  {
    actividadSemana: "Actividades/semana ",
    observaciones: "Observaciones",
    Mes: "Agosto",
    responsables: "Responsable"
  },
];
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
<div className="modal-margen-title">
  <p className="title-cronograma">CRONOGRAMA</p>
</div>
<div>
    <ButtonIcon
        title="Editar"
        icon="file-edit-outline"
        extraClass="aling-right margin-right"
      
    />
  </div>
<CardComponent classExtra="opacity-card card-cronograma">
  <div className="columns container-personal">
    <p className="title-is-cronograma">Cronograma de actividades de proyecto:</p>
    <p className="input-cronograma">Nombre del proyecto</p>
  </div>
  <div className="column67 container-cronograma">
    <div className="titulos-container">
      <div className="title-column">Actividades/semana</div>
      <div className="title-column">Observaciones</div>
      <div className="title-column">Mes</div>
      <div className="title-column">Responsable</div>
    </div>
    {actividades.map((actividad, index) => (
      <div key={index} className="fila-actividad">
        <div className="actividad-column">{actividad.actividadSemana}</div>
        <div className="actividad-column">{actividad.observaciones}</div>
        <div className="actividad-column"><div className="rectangulo"></div></div>
        <div className="actividad-column">{actividad.responsables}</div>
      </div>
    ))}
  </div>
</CardComponent>
    </div>
  );
};

export default Calendar;
