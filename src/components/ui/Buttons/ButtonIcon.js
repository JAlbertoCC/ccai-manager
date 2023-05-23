import React from 'react';

export const ButtonIcon = (props) => {
    const { title, icon, extraClass, hdlOnClickEvent } = props

  return (
    <>
      <button className={`button button-tables delete-events ${extraClass}`}
      onClick={() => hdlOnClickEvent()}
      >
        <span>{title}</span>
        <span className="icon">
          <i className={`mdi mdi-${icon} icon-blue`}></i>
        </span>
      </button>
    </>
  )
}