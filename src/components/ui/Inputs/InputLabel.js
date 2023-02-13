import React from 'react';

export const InputLabel = (props) => {
  const { title, iconName, typeInput, isPassword, hdlOnClick } = props
  
  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            className="input input-radious"
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
