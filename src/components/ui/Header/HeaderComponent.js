import React from 'react';
import { useNavigate } from "react-router-dom";

export const HeaderComponent = (props) => {
  const navigate = useNavigate();
  
  const goToLink = () => {
    navigate(-1);
  };
  
  return (
      <div className="header-componet">        
        <a onClick={() => goToLink()}>
        <i className="mdi mdi-chevron-left" /> {props.title}
        </a> 
      </div>    
  )
}
