import React from 'react';

export const GreenButton = (props) => {
  const {
    buttonText,
    classExtra,
    hdlOnClickGreen,
    disabled
  } = props

  return (
    <div className="buttons">
      <button
        className={`button is-rounded button-green ${classExtra}`}
        onClick={() => hdlOnClickGreen()}
        disabled={disabled}
      >
        { buttonText }
      </button>
    </div>
  )
}
