import React from 'react';

export const InputLabel = (props) => {
  const { autoFocus, disabled, title, iconName, typeInput, hdlOnClick, classExtra, hdlOnkeyDown, hdlOnChange, textplace = '' } = props
  
  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            autoFocus={autoFocus}
            onKeyDown={hdlOnkeyDown}
            onChange={hdlOnChange}
            className={`input input-radious ${classExtra}`}
            type={ typeInput }
            placeholder={ textplace }
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
