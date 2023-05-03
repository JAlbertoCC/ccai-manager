import React, { useState } from 'react';

export const DropDown = (props) => {
    const { items = [],  title, classExtra, hdlOnChange, valueSelect = 'name' } = props

    return (
      <label className="float-label">
        <div className="select select-radiusis-medium">
        
          <select
            onChange={hdlOnChange}
            className={`select-width input-radious select-style ${classExtra}`}
          >
            {items ?
              items.map(item => {
                return <option key={`${item.id}-${title}`} value={item[valueSelect]}>{item.name}</option>
              }) : <></>
            }
          </select>
          <span className='float-span'>{ title }</span>   
        </div>  
      </label>
    );
};

