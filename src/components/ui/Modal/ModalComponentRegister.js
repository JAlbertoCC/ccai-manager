import React from 'react';

export const ModalComponentRegister = (props) => {    
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
                        <p className="body-sucessfull">Los docentes se comunicaran con usted para</p>
                        <p className="body-sucessfull">informarles si su registro fue aceptado en el</p>
                        <p className="body-sucessfull">CCAI.</p> 
                    </div>
                </section>
                
            </div>
        </div>
    )
}