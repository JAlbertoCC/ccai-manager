import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

import { CardComponent } from "../components/ui/Cards/CardComponent";
import { InputLabel } from "./../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "./../components/ui/Buttons/PrimaryButton";


import { useForm } from "react-hook-form"; 


const VisitView = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = evento => {
    console.log(evento);
  }
  console.log(errors);

  const [showRegisterView, setShowRegisterView] = useState(true);
  const [selectedTab, setSelectedTab] = useState(true);
  const [setTypeInputName] = useState('')
  const [setTypeInputLastNameF] = useState('')
  const [setTypeInputLastNameM] = useState('')
  const [setTypeInputMail] = useState('')
  

  useEffect(() => {
  }, []);

  const getDate = (isHour = false) => {
    return isHour
      ? DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE)
      : DateTime.now().toLocaleString(DateTime.DATE_MED);
  };

  const render = () => {
    /*setShowRegisterView(!showRegisterView);
    setTimeout(() => {
      window.location.reload();
    }, 5000); */
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
   
    <div className="section login-content">
      {showRegisterView ? (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  
                  <InputLabel title="Nombre" name="name"
                  hdlOnChange={(e)=>setTypeInputName(e.target.value)}
                  {...register("name",{
                    required: "El campo es obligatorio" 
                  })} />
                  <p>{errors.name?.message}</p> 

                </div>

                <div className="column is-12">
                  <InputLabel title="Apellido Paterno"  name="LastNameP"
                  hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)}
                  {...register("LastNameP",{
                    required: "El campo es obligatorio" 
                  })} />
                  <p>{errors.name?.message}</p> 

                </div>

                <div className="column is-12">
                  <InputLabel title="Apellido Materno" name = "LastNameM"
                  hdlOnChange={(e) => setTypeInputLastNameM(e.target.value)}
                  {...register("LastNameM",{
                    required: "El campo es obligatorio" 
                  })} />
                  <p>{errors.name?.message}</p> 

                </div>

                <div className="column is-12">
                  <InputLabel title="Correo Institucional" 
                  hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                  name="email"
                  errors={errors}
              register={register}
              validationSchema={{ 
                required: "Verifica que el formato sea válido: example201920518@tese.edu.mx o 201920518@tese.edu.mx",
                pattern: {
                  value: /^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Solo caracteres"
                }
              }}/>
                  {errors.email && <span>{errors.email.message}</span>}
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
                  <InputLabel title="Nombre" 
                  hdlOnChange={(e)=>setTypeInputName(e.target.value)}
                  {...register("name",{
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Formato incorrecto"
                  }
                  })} />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="column is-12">
                  <InputLabel title="Correo Institucional"
                  hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                  name="email"
                  errors={errors}
              register={register}
              validationSchema={{ 
                required: "Formato incorrecto, verifica el campo",
                pattern: {
                  value: /^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Verifica que el formato sea válido: example201920518@tese.edu.mx o 201920518@tese.edu.mx"
                }
              }} />

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
        </form>
      ) : (
        <form>
        <CardComponent classExtra="opacity-card cardSam">
          <div className="container-dates">
            <p className="text-date">{getDate()}</p>
            <div className="container-hours">
              <div className="text-hour">{getDate(true)}</div>
            </div>
          </div>
          <br />
        </CardComponent>
        </form>
      )}
    </div>
    
  );
};

export default VisitView;

