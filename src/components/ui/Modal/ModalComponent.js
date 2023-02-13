import React from 'react';

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
                        <p>Nombre:</p>
                        <p>Matricula:</p>
                        <p>Calificación:</p>
                        <p>Carrera:</p>
                        <p>Periodo:</p>
                    </div>
                    
                    <button className="button is-rounded is-medium btnModalAceptar">Aceptar</button>
                    <button className="button is-rounded is-medium btnModalRechazar">Rechazar</button>
                </section>
                
            </div>
        </div>
    )
}

/* modal card

onClick={`${isActive ? 'is-close':""}`}

*/

/* modalOld
<div className={`modal is-active ${classExtra}`} >
    { children }
    <div className="modal-background" style={{ backgroundColor: backgroundColor }}> </div>
    <div className="modal-content">
        <p className="title-sucessfull">{title} </p>
        <button className = "button is-rounded">Aceptar</button>
        <button className = "button is-rounded">Rechazar</button>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
</div>
*/