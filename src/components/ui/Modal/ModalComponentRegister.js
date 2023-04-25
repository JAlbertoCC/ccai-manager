import React from "react";

export const ModalComponentRegister = (props) => {
  const { textModal, classExtra, title, isActive, hdlOnclick } = props;

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className={`modal-card ${classExtra}`}>
        <section className="modal-card-body">
          <button
            className="delete btnModalClose"
            aria-label="close"
            onClick={hdlOnclick}
          ></button>
          <p className="modal-card-title title-modal">{title}</p>
          <div>
            <p className="body-sucessfull">
              {textModal}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
