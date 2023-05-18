import React from 'react';

export const RedButton = (props) => {
  const {
    buttonText,
    classExtra,
    hdlOnClickRed,
    disabled
  } = props

  return (
    <div className="buttons">
      <button
        className={`button is-rounded button-red ${classExtra}`}
        onClick={() => hdlOnClickRed()}
        disabled={disabled}
      >
        { buttonText }
      </button>
    </div>
  )
}
