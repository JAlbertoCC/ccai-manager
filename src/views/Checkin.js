import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { ButtonComponent } from '../components/ui/Buttons/PrimaryButton'

import React from 'react';
const Checkin = () => {
    return (
        <CardComponent classExtra="opacity-card card-check">
            <p className="title-sucessfull" >Bienvanido al CCAI</p>
            <figure className="image is-96x96 center-img">
                <img src={require("./../assets/logo.png" )} alt="" />
            </figure>
            <p className="dialog-view-check">Agradecemos su visita, </p>
            <p className="dialog-view-check">Por favor, registre sus accesos y salidas en el lector. </p>
            <InputLabel
                typeInput="text"
            />
            <p className="dialog-view-check">Si eres visitante, pulsa el siguiente botón.</p>
            <ButtonComponent
                buttonText="Visitante"
            />
        </CardComponent>

        
    )
}
  
export default Checkin