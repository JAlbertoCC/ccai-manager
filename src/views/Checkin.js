import React, { useEffect, useState } from "react";

import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ErrorMessage } from "../components/ui/Warnings/ErrorMessage";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";

import { useNavigate  } from 'react-router-dom'

import { DateTime } from "luxon";
import { useUsers } from "./../hooks/useUsers";

const Checkin = () => {
  const { checkingInternalUser } = useUsers();
  const [showComponets, setShowComponets] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const goToLink = (uri) => {
    navigate(uri)
  }

  useEffect(() => {console.log(DateTime.now().toLocaleString(DateTime.DATE_MED))
  }, [showComponets])
  
  const render = (value) => {
    if (value.target.value.length >= 9) {
      checkingInternalUser(value.target.value)
        .then(item => {
          if (item?.result?.matricula_student) {
            setErrorMessage(item?.result?.matricula_student);
            setShowError(!showError);
          } else if (item) {
            console.log('item =', item)
            setShowError(false);
            setUserInformation(item?.result);
            setShowComponets(!showComponets);
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          }
        })
        .catch(error => {
          setShowComponets(false)
          console.log('error', error.message)
          setErrorMessage(error.message);
          setShowError(true);
        });
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

            <br />

            <p className="dialog-view-check"> Agradecemos su visita, </p>
            <br />
            <p className="dialog-view-check"> Por favor, registre sus accesos y salidas en el lector. </p>
            <br />
            <InputLabel
              typeInput="text"
              classExtra="input-check"
              hdlOnkeyDown={(e) => render(e)}
            />
            <br />
            <p className="dialog-view-check"> Si eres visitante, pulsa el siguiente botón. </p>
            <br />
            <ButtonComponent buttonText="Visitante" hdlOnClickEvent={() => goToLink('/visit-view')} />
          </CardComponent>
        ) : (
          <CardComponent classExtra="opacity-card card-check">
            <div className="container-dates">
              <p className='text-date'>{ getDate('DATE_MED') }</p>
              <br />
              <div className='container-hours'>
                <div className='text-hour'>{ getDate('TIME_24_SIMPLE') }</div>
              </div>
            </div>
            <br />
            <p className="dialog-view-check"> Bienvenido {`${userInformation.name} ${userInformation.first_name} ${userInformation.second_name}`} </p>
            <br />
            <p className="dialog-view-check"> Se ha registrado correctamente tu entrada a las {getDate('TIME_24_SIMPLE')}. </p>
            <br />
            <p className="text-alert">  No olvides registrar en el lector tus entradas y salidas del CCAI </p>
          </CardComponent>
        )
      }

      {
        showError ?
          <ErrorMessage
            message={errorMessage}
            hdlOnClick={() => setShowError(!showError)}
          
          /> : <></>
      }
    </div>
  );

};

export default Checkin;