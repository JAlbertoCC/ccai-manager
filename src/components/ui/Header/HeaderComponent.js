import React from 'react';
export const HeaderComponent = (props) => {
  return (
      <div className="header-componet">     
        <a href="/">
          <i className="mdi mdi-chevron-left"></i> {props.title}   
        </a> 
      </div>    
  )
}
