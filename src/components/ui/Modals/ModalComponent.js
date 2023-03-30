import React from 'react';
import Loader, { IconLoader } from '../Loader';

export const ModalComponent = (props) => {   

    const { children, classExtra, title, isActive, hdlOnclick} = props
    return(
     
        <div className={`modal ${isActive ? 'is-active':''}`} >
            {children}
            <div className="modal-background" ></div>
            <div className={`modal-card ${classExtra}`}>
                <section className={`modal-card-body ${classExtra}`}>
                    <p className="modal-card-title title-modal">{title}</p>
                    <button className="delete btnModalClose" aria-label="close" onClick = {hdlOnclick}> </button>
                    <div>
                        
                       <IconLoader></IconLoader> 
                    </div>
                    
                    <button className="button is-rounded is-medium btnModalAceptar">Aceptar</button>
                    <button className="button is-rounded is-medium btnModalRechazar">Rechazar</button>
                </section>
                
            </div>
        </div>
    
    )
}