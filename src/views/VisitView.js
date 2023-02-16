import React, { useEffect,useState } from 'react';

import { CardComponent } from '../components/ui/Cards/CardComponent';
import { InputLabel } from './../components/ui/Inputs/InputLabel';
import { ButtonComponent } from './../components/ui/Buttons/PrimaryButton';


const VisitView = () => {
    const [showRegisterView, setShowRegisterView] = useState(true);

    const render = () => {
      setShowRegisterView(!showRegisterView)
      setTimeout(() => {
        window.location.reload();
        console.log(showRegisterView);
      }, 5000);
    }
    
    return (
        <div className='section login-content'>
          {showRegisterView ? (
          <CardComponent classExtra='opacity-card cardSam'>

            <div className="container-dates">
              <p className='text-date'>May 24 23</p>

              <div className='container-hours'>
                <div className='text-hour'>12:00</div>
              </div>
            </div>

            <div className='columns content-forms'>
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
              buttonText='Registrar'
              classExtra='button-style'
              hdlOnClickEvent={() => render()}
            
            />
            <br />

            <p className='text-alert'>
              No olvides registrar tu entrada y salida del CCAI.
            </p>
          </CardComponent> ) : (

          <CardComponent classExtra='opacity-card cardSam'>
            <div className="container-dates">
              <p className='text-date'>May 24 23</p>

              <div className='container-hours'>
                <div className='text-hour'>12:00</div>
              </div>
            </div>

            <p className='text-information'>
              Gracias por tu visita, vuelve pronto!
            </p>
            <br />
            <p className='text-information'>
              Tu hora de salida se registró correctamente a las 11:48. 
            </p>
            <br />
            <p className='text-alert'>
              No olvides registrar tu entrada y salida del CCAI.
            </p>
          </CardComponent>)}
        </div>
    )
    
}

export default VisitView