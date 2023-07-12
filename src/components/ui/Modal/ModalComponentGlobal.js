import React from "react";
import { RedButton } from "../Buttons/RedButton";
import { GreenButton } from "../Buttons/GreenButton";

export const ModalComponentGlobal = (props) => {
  const {
    textModal,
    classExtra,
    children,
    title,
    isActive,
    hdlOnclick,
    titleGreen,
    titleRed,
    hdlOnClickGreen,
    hdlOnClickRed,
  } = props;

  return (
    <>
      <div className={`modal ${isActive ? "is-active" : ""} `}>
        <div className="modal-background"></div>
        <div className={`modal-card ${classExtra}`}>
          <section className="modal-body">
            <div className="modal-margen-title">
              <p className="modal-title">{title}</p>
              <button
                className="delete btnModalClose"
                aria-label="close"
                onClick={hdlOnclick}
              ></button>
            </div>
            <hr className="hr-modal" />

            <div>{children}</div>

            <div className="button-style-modal">
              <GreenButton
                aria-label="close"
                onClick={hdlOnClickGreen}
                buttonText={titleGreen}
              />
              <RedButton
                aria-label="close"
                hdlOnClickRed={hdlOnClickRed}
                buttonText={titleRed}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
