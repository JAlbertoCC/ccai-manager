import React from 'react';

const ButtonDecorative = (props) => {
  const { title, backgroundColor, navOnclick, imgResource = 'logo.png' } = props
  return (
    <div className='content-decorative'>
      
      <div className='button-decorative icon-content' style={{ backgroundColor: backgroundColor }}>
        <img src={require(`./../../../assets/${imgResource}`)} /> 
      </div>
      
      <div className='button-decorative button-text' onClick={() => navOnclick()}>
        <p className='text-decorative'>{title}</p>
      </div>
    </div>
  )
}

export default ButtonDecorative
