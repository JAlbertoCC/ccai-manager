import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { useNavigate  } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { useUsers } from "./../hooks/useUsers";

const Checkin = () => {
  const { checkingInternalUser } = useUsers();
  const [showComponets, setShowComponets] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const navigate = useNavigate()

  const goToLink = (uri) => {
    navigate(uri)
  }

  useEffect(() => {console.log(DateTime.now().toLocaleString(DateTime.DATE_MED))
  }, [showComponets, userInformation])
  
  const render = (value) => {
    if (value.target.value.length >= 9) {
      console.log(value.target.value)
      checkingInternalUser(value.target.value)
        .then(item => {
          console.log('item => ', item);
          if (item.result.matricula_student) {
            console.log('item.matricula_student => ', item.result.matricula_student)
          } else {
            setUserInformation(item.result);
            setShowComponets(!showComponets)
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          }
        })
    }
  }
  
  const getDate = (type) => {
    return DateTime.now().toLocaleString(DateTime[type])
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
            <InputLabel
              typeInput="text"
              classExtra="input-check"
              hdlOnkeyDown={(e) => render(e)}
            />
            <p className="dialog-view-check"> Si eres visitante, pulsa el siguiente botón. </p>
            <ButtonComponent buttonText="Visitante" hdlOnClickEvent={() => goToLink('/visit-view')} />
          </CardComponent>
        ) : (
          <CardComponent classExtra="opacity-card card-check">
            <div className="container-dates">
              <p className='text-date'>{ getDate() }</p>

              <div className='container-hours'>
                <div className='text-hour'>{ getDate('TIME_24_SIMPLE') }</div>
              </div>
            </div>
            <p className="dialog-view-check"> Bienvenido {`${userInformation.name} ${userInformation.first_name} ${userInformation.second_name}`} </p>
            <p className="dialog-view-check"> Se ha registrado correctamente tu entrada a las {getDate('DATE_MED')}. </p>
            <p className="text-alert">  No olvides registrar en el lector tus entradas y salidas del CCAI </p>
          </CardComponent>
        )
      }
    </div>
  );

};

export default Checkin;