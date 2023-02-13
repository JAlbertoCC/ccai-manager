import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";

import React, { useState } from "react";
const Checkin = () => {
  const [showComponets, setShowComponets] = useState(true);
  const render = () => {
    console.log("hola");
    setShowComponets(!showComponets)
  }
  return (
    <div className="section">

      {showComponets ? (
        <CardComponent classExtra="opacity-card card-check">
          <p className="title-sucessfull">Bienvanido al CCAI</p>
          <figure className="image is-96x96 center-img">
            <img src={require("./../assets/logo.png")} alt="" />
          </figure>
          <p className="dialog-view-check">Agradecemos su visita, </p>
          <p className="dialog-view-check">
            Por favor, registre sus accesos y salidas en el lector.
          </p>
          <InputLabel typeInput="text" classExtra = "input-check" hdlOnkeyDown = {()=> render() }/>
          <p className="dialog-view-check">
            Si eres visitante, pulsa el siguiente botón.
          </p>
          <ButtonComponent buttonText="Visitante" />
        </CardComponent>
      ) : (
        <CardComponent classExtra="opacity-card card-check">
          <p className="title-sucessfull">10/02/2023</p>
          <p className="title-sucessfull">12:00</p>
          <p className="dialog-view-check">Biemvenido User 1! </p>
          <p className="dialog-view-check">
            Se ha registrado correctamente tu entrada a las 12:00.
          </p>

          <p className="title-sucessfull">
            No olvides registrar en el lector tus entradas y salidas del CCAI
          </p>
          <ButtonComponent buttonText="Visitante" />
        </CardComponent>
      )}
      {
      //<ButtonComponent buttonText="Cambiar" hdlOnClickEvent = {() => render()} />
      }
    
    </div>
  );
};

export default Checkin;
