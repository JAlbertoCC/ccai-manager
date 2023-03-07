import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { useNavigate  } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";


const Checkin = () => {
  const [showComponets, setShowComponets] = useState(true);
  const navigate = useNavigate()
  const goToLink = (uri) => {
    navigate(uri)
  } 
  useEffect(() => {console.log(DateTime.now().toLocaleString(DateTime.DATE_MED))
  }, [showComponets])
  const render = () => {
    setShowComponets(!showComponets)
    setTimeout(() => {
      window.location.reload();
      console.log(showComponets);
    }, 5000);
  }
  const getDate = (isHour = false) => {

    return isHour ?  DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE) : DateTime.now().toLocaleString(DateTime.DATE_MED); 
  };
  return (
    <div className="section">
      {
        showComponets ? (
          <CardComponent classExtra="opacity-card card-check">
            <p className="title-sucessfull">Bienvenido al CCAI </p>
            <figure className="image is-96x96 center-img">
              <img src={require("./../assets/logo.png")} alt="" />
            </figure>
            <p className="dialog-view-check"> Agradecemos su visita, </p>
            <p className="dialog-view-check"> Por favor, registre sus accesos y salidas en el lector. </p>
            <InputLabel typeInput="text" classExtra="input-check" hdlOnkeyDown={() => render()} />
            <p className="dialog-view-check"> Si eres visitante, pulsa el siguiente botón. </p>
            <ButtonComponent buttonText="Visitante" hdlOnClickEvent={() => goToLink('/visit-view')} />
          </CardComponent>
        ) : (
          <CardComponent classExtra="opacity-card card-check">
            <div className="container-dates">
              <p className='text-date'>{ getDate() }</p>

              <div className='container-hours'>
                <div className='text-hour'>{ getDate(true) }</div>
              </div>
            </div>
            <p className="dialog-view-check"> Bienvenido User1! </p>
            <p className="dialog-view-check"> Se ha registrado correctamente tu entrada a las {getDate(true)}. </p>
            <p className="text-alert">  No olvides registrar en el lector tus entradas y salidas del CCAI </p>
          </CardComponent>
        )
      }
    </div>
  );

};

export default Checkin;