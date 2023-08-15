import React from 'react';
import { useNavigate  } from 'react-router-dom'

export const HeaderComponentQuestion = (props) => {
  const navigate = useNavigate()

  return (
      <div className="header-component-question">     
        <a onClick={() => navigate(-1)}>
          <i className="mdi mdi-chevron-left"></i> {props.title}   
        </a> 
      </div>    
  )
}
