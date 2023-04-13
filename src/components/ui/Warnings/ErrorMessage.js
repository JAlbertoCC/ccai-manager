import React, { useState } from 'react';

export const ErrorMessage = (props) => {
  const { message = "", hdlOnClick = () => {  }, messageType = 'is-danger' } = props
  return (
    <div className={`notification-register notification ${messageType}`}>
      <button className="delete" onClick={hdlOnClick}></button>
        {message}
    </div>
  )
};