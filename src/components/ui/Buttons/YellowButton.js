import React from "react";

export const YellowButton = (props) =>{
    const {
        buttonText,
        classExtra,
        hdlOnClickYellow,
        disabled
      } = props
    
      return (
        <div className="buttons">
          <button
            className={`button is-rounded button-yellow ${classExtra}`}
            onClick={() => hdlOnClickYellow()}
            disabled={disabled}
          >
            { buttonText }
          </button>
        </div>
      )

}