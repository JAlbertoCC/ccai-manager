import React, { useState } from 'react';

export const ErrorMessage = (props) => {
  const { message = "", hdlOnClick = () => {  } } = props
  return (
    <div className="notification-register notification is-danger">
      <button className="delete" onClick={hdlOnClick}></button>
        {message}
    </div>
  )
};