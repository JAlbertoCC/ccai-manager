import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

import { CardComponent } from "../components/ui/Cards/CardComponent";
import { InputLabel } from "./../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "./../components/ui/Buttons/PrimaryButton";

import { useForm } from "react-hook-form"; 

function ValidationForm(){
  const{register,handleSubmit, formState: {errors}} = useForm();
  const onSubmit = () => data => console.log(data);

  return(
    <form columns content-forms>
      <input name="Nombre" ref={register}></input>
      {errors.Nombre && <span>El campo es obligatorio</span>}
      <input name="ApellidoPaterno" ref={register}></input>
      {errors.ApellidoPaterno && <span>El campo es obligatorio</span>}
      <input name="ApellidoMaterno" ref={register}></input>
      {errors.ApellidoMaterno && <span>El campo es obligatorio</span>}
      <input name="CorreoElectrónico" ref={register}></input>
      {errors.CorreoElectrónico && <span>El campo es obligatorio</span>}
    </form>

    
  )
}


const VisitView = () => {
  const [showRegisterView, setShowRegisterView] = useState(true);
  const [selectedTab, setSelectedTab] = useState(true);

  useEffect(() => {
    console.log(DateTime.now().toLocaleString(DateTime.DATE_MED));
  }, []);

  const getDate = (isHour = false) => {
    return isHour
      ? DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE)
      : DateTime.now().toLocaleString(DateTime.DATE_MED);
  };

  const render = () => {
    setShowRegisterView(!showRegisterView);
    setTimeout(() => {
      window.location.reload();
      console.log(showRegisterView);
    }, 5000);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="section login-content">
      {showRegisterView ? (
        <CardComponent classExtra="opacity-card cardSam">
          {/* TABS */}
          <div className="tabs is-large">
            <ul style={{ justifyContent: "space-between" }}>
              <li>
                <a onClick={() => handleTabClick(true)}>Entrada</a>
              </li>
              <li>
                <a onClick={() => handleTabClick(false)}>Salida</a>
              </li>
            </ul>
          </div>
          {/* contenedor de fecha */}
          <div className="container-dates">
            <p className="text-date">{getDate()}</p>
            {/* contenedor de hoas */}
            <div className="container-hours">
              <div className="text-hour">{getDate(true)}</div>
            </div>
          </div>
          {selectedTab && (
            <div>
              <div className="columns content-forms">
                <div className="column is-12">
                  <InputLabel title="Nombre" />
                </div>
                <div className="column is-12">
                  <InputLabel title="Apellido Paterno" />
                </div>
                <div className="column is-12">
                  <InputLabel title="Apellido Materno" />
                </div>
                <div className="column is-12">
                  <InputLabel title="Correo Electrónico" />
                </div>
              </div>
              <ButtonComponent
                buttonText="Registrar"
                classExtra="button-style"
                hdlOnClickEvent={() => render()}
              />
              <p className="text-information">
                Tu hora de entrada se registró correctamente a las{" "}
                {getDate(true)}.
              </p>
              <br />
              <p className="text-alert">
                No olvides registrar tu entrada y salida del CCAI.
              </p>
            </div>
          )}
          {!selectedTab && (
            <div>
              <div className="columns content-forms">
                <div className="column is-12">
                  <InputLabel title="Nombre" />
                </div>
                <div className="column is-12">
                  <InputLabel title="Correo Electrónico" />
                </div>
              </div>
              <ButtonComponent
                buttonText="Registrar"
                classExtra="button-style"
                hdlOnClickEvent={() => render()}
              />
              <p className="text-information">
                Tu hora de salida se registró correctamente a las{" "}
                {getDate(true)}.
              </p>
              <br />
              <p className="text-information">
                Gracias por tu visita, vuelve pronto!
              </p>
            </div>
          )}
        </CardComponent>
      ) : (
        <CardComponent classExtra="opacity-card cardSam">
          <div className="container-dates">
            <p className="text-date">{getDate()}</p>
            <div className="container-hours">
              <div className="text-hour">{getDate(true)}</div>
            </div>
          </div>
          <br />
        </CardComponent>
      )}
    </div>
  );
};

export default VisitView;
