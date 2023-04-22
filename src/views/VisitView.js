import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

import { CardComponent } from "../components/ui/Cards/CardComponent";
import { InputLabel } from "./../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "./../components/ui/Buttons/PrimaryButton";

import { useForm } from "react-hook-form";

const VisitView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (evento) => {
    console.log(evento);
  };
  console.log(errors);

  const [showRegisterView, setShowRegisterView] = useState(true);
  const [selectedTab, setSelectedTab] = useState(true);
  const [setTypeInputName] = useState("");
  const [setTypeInputLastNameF] = useState("");
  const [setTypeInputLastNameM] = useState("");
  const [setTypeInputMail] = useState("");

  useEffect(() => {}, []);

  const getDate = (isHour = false) => {
    return isHour
      ? DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE)
      : DateTime.now().toLocaleString(DateTime.DATE_MED);
  };
  //function
  const validarInputs = (input1, input2, input3, input4) => {
    const inputs = [input1, input2, input3, input4];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].trim() === "") {
        return false; //no pass, exists spaces
      }
    }

    return true; //pass a render window
  };

  const render = () => {
    //true si no hay vacios

    let value = validarInputs(
      setTypeInputName,
      setTypeInputLastNameF,
      setTypeInputLastNameM,
      setTypeInputMail
    );

    if (value == true) {
      setShowRegisterView(!showRegisterView);

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      console.log("llene todos los campos");
    }
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
                    <InputLabel
                      title="Nombre"
                      hdlOnChange={(e) => setTypeInputName(e.target.value)}
                      name="name"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                      }}
                    />
                    {errors?.name && <p role="alert">{errors.name?.message}</p>}
                  </div>

                  <div className="column is-12">
                    <InputLabel
                      title="Apellido paterno"
                      hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)}
                      name="lastNameF"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                      }}
                    />
                    {errors?.lastNameF && (
                      <p role="alert">{errors.lastNameF?.message}</p>
                    )}
                  </div>

                  <div className="column is-12">
                    <InputLabel
                      title="Apellido materno"
                      hdlOnChange={(e) => setTypeInputLastNameM(e.target.value)}
                      name="lastNameM"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                      }}
                    />
                    {errors?.lastNameM && (
                      <p role="alert">{errors.lastNameM?.message}</p>
                    )}
                  </div>

                  <div className="column is-12">
                    <InputLabel
                      title="Correo Institucional"
                      hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                      name="email"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                          message: "Formato incorrecto. ",
                        },
                      }}
                    />
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
                    <InputLabel
                      title="Nombre"
                      hdlOnChange={(e) => setTypeInputName(e.target.value)}
                      name="name"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                      }}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                  </div>
                  <div className="column is-12">
                    <InputLabel
                      title="Correo Institucional"
                      hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                      name="email"
                      errors={errors}
                      register={register}
                      validationSchema={{
                        required: "El campo es requerido",
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                          message: "Formato incorrecto. ",
                        },
                      }}
                    />
                    {errors?.email && (
                      <p role="alert">{errors.email?.message}</p>
                    )}
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
