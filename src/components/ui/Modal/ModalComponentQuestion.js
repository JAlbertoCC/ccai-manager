import React from "react";

import { StrongGreenButton } from "../Buttons/StrongGreenButton";

export const ModalComponentQuestion = (props) => {
  const {
    
    classExtra,
    children,
    title,
    isActive,
    hdlOnclick,
    titleGreen,
    
    hdlOnClickGreen,
    
  } = props;

  return (
    <>
      <div className={`modal ${isActive ? "is-active" : ""} `}>
        <div className="modal-background"></div>
        <div className={`modal-card ${classExtra}`}>
          <section className="modal-body">
            <div className="modal-newMargen-title">
              <p className="modal-title modal-title-red-centered">{title}</p>
              <button
                className="delete btnModalClose"
                aria-label="close"
                onClick={hdlOnclick}
              ></button>
            </div>
            <hr className="hr-modal" />

            <div>{children}</div>

            <div className="button-style-modal">
              <StrongGreenButton
                aria-label="close"
                onClick={hdlOnClickGreen}
                buttonText={titleGreen}
              />
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
