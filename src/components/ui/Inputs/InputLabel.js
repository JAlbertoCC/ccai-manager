import React from 'react';

export const InputLabel = (props) => {
  const { title, iconName, typeInput, hdlOnClick, classExtra, hdlOnkeyDown, hdlOnChange} = props
  
  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            onKeyDown={hdlOnkeyDown}
            onChange={hdlOnChange}
            className={`input input-radious ${classExtra}`}
            type={ typeInput }
          />
          {
            title ?
              <span className='float-span'>{ title }</span> :
              <span
                className="icon is-right"
                style={{ cursor: 'pointer' }}
              >
                <i
                  className={`mdi ${iconName} icon-blue`}
                  onClick={() => hdlOnClick}
                />
              </span>
          }
        </label>
      </p>
    </div>
  )
}
