import React from "react";
import { RedButton } from "../Buttons/RedButton";
import { GreenButton } from "../Buttons/GreenButton";

export const ModalComponentGlobal = (props) => {
  const { textModal, classExtra, children, title, isActive, hdlOnclick, titleGreen, titleRed, hdlOnClickGreen, hdlOnClickRed} = props;

  return (
    <>
    <div className={`modal ${isActive ? "is-active" : ""} `}>
      <div className="modal-background"></div>
      <div className={`modal-card ${classExtra}`}>
        <section className="modal-body">
          <button
            className="delete btnModalClose"
            aria-label="close"
            onClick={hdlOnclick}
          ></button>
          <p className="modal-card-title title-modal">{title}</p>

          <div>
          {children}
          </div>

          <div class="button-style-modal">
          <GreenButton
              className=" "
              aria-label="close"
              onClick={hdlOnClickGreen}
              title={titleGreen}
            />
            <RedButton
            className=" "
            aria-label="close"
            onClick={hdlOnClickRed}
            title={titleRed}
          />
          </div>
          <div>
            <p className="body-sucessfull">
              {textModal}
            </p>
          </div>
        </section>
      </div>
    </div>
    
    </>
  );
};
