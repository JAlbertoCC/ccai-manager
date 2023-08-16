import React from 'react';

export const StrongGreenButton = (props) => {
  const {
    buttonText,
    classExtra,
    hdlOnClickGreen,
    disabled
  } = props

  return (
    <div className="buttons">
      <button
        className={`button is-rounded button-strongGreen ${classExtra}`}
        onClick={() => hdlOnClickGreen()}
        disabled={disabled}
      >
        { buttonText }
      </button>
    </div>
  )
}
