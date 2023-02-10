import React from "react";

export const SerchComponet  = (props) => {
    const { extraClass } = props

    return (
        <div className={`field ${extraClass}`}>
            <p className ="control has-icons-right">
                <input 
                    className="input is-rounded" 
                    type= "text"  
                />
                <span className="icon is-right">
                    <i className='mdi mdi-magnify icon-blue'></i>
                </span>
            </p>
        </div>
    )
}