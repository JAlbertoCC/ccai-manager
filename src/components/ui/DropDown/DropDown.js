import React, { useState } from 'react';

export const DropDown = (props) => {
    const {seleccion=[], items = [],  title, iconName,typeSelect, typeInput, hdlOnClick, classExtra, hdlOnkeyDown, hdlOnChange, item1,item2,item3,item4} = props

    return (
        <label className="float-label">
        <div className="select">
        
        <select
            onChange={hdlOnChange}
            className={`select-width input-radious ${classExtra}`}
            >
        {items ?
            items.map(item => {
              return <option key={item.id} value={item.id}>{item.name}</option>
            }) : <></>
        }

        </select>
        <span className='float-span'>{ title }</span>
            
            
            
        </div>
        
            
        
        </label>
    )
};

