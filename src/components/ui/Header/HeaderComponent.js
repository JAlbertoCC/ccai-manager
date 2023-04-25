import React from 'react';
import { useNavigate  } from 'react-router-dom'

export const HeaderComponent = (props) => {
  const navigate = useNavigate()

  return (
      <div className="header-componet">     
        <a onClick={() => navigate(-1)}>
          <i className="mdi mdi-chevron-left"></i> {props.title}   
        </a> 
      </div>    
  )
}
