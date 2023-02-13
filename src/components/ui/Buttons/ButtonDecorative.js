import React from 'react';

const ButtonDecorative = (props) => {
  const { title, icon, backgroundColor, navOnclick} = props
  return (
    <div className='content-decorative'>
      
      <div className='button-decorative icon-content' style={{ backgroundColor: backgroundColor }}>
        <i className={`mdi mdi-${icon} mdi-decorative`} />
      </div>
      
      <div className='button-decorative button-text' onClick={() => navOnclick()}>
        <p className='text-decorative'>{title}</p>
      </div>
    </div>
  )
}

export default ButtonDecorative
