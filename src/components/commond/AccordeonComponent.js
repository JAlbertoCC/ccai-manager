import React from 'react';

export const AccordeonComponent = (props) => {
  const { title, children, isActive, hdlOnShowContent, iconTitle } = props
  return (
    <>
      <div className='header-accordeon'>
        <div style={{ display: 'flex' }}>
          <i className={`mdi ${iconTitle}`}></i>
          <p style={{ margin: '5px' }}>{ title }</p>
        </div>
        <i className={`mdi mdi-chevron-${ !isActive ? 'down' : 'right'}`} onClick={() => hdlOnShowContent()}></i>
      </div>
      <hr className='line-style' />
      <div className='content-accordeon' style={{ display: !isActive ? 'block' : 'none' }}>
        { children }
      </div>
    </>
  )
}
