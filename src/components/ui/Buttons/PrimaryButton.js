import React from 'react';

export const ButtonComponent = (props) => {
  const {
    buttonText,
    classExtra,
    hdlOnClickEvent,
    disabled
  } = props

  return (
    <div className="buttons">
      <button
        className={`button is-rounded button-tese ${classExtra}`}
        onClick={() => hdlOnClickEvent()}
        disabled={disabled}
      >
        { buttonText }
      </button>
    </div>
  )
}
