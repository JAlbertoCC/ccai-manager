import React from 'react';

export const ButtonIcon = (props) => {
    const { title, icon, extraClass } = props

  return (
    <>
      <button className={`button button-tables delete-events ${extraClass}`}>
        <span>{title}</span>
        <span className="icon">
          <i className={`mdi mdi-${icon} icon-blue`}></i>
        </span>
      </button>
    </>
  )
}