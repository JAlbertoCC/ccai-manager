import React from "react";
import { CardComponent } from './../components/ui/Cards/CardComponent'


const SuccesfullRegister = () => {
    return (
        <div>
            <CardComponent classExtra='opacity-card card-register-succesfull'>
                <div>
                    <p className="title-sucessfull">¡REGISTRO EXITOSO!</p>
                    <p className="body-sucessfull">Los doscentes se comunicaran con usted para</p>
                    <p className="body-sucessfull">informarles si su registro fue aceptado en el</p>
                    <p className="body-sucessfull">CCAI.</p> 
                </div>
            </CardComponent>
        </div>
    )
}

export default SuccesfullRegister