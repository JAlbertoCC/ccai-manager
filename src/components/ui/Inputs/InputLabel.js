import React from "react";

export const InputLabel = (props) => {
  const {
    name,
    validationSchema,
    errors,
    register,
    autoFocus,
    disabled,
    title,
    iconName,
    typeInput,
    hdlOnClick,
    classExtra,
    hdlOnkeyDown = () => {},
    hdlOnChange = () => {},
    textplace = "",
    isError = false,
    isEnter = false
  } = props;

  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            autoFocus={autoFocus}
            onChange={() => console.log('hola')}
            onKeyDown={(event) => {
              if (isEnter && event.key === "Enter") {
                if (hdlOnkeyDown) hdlOnkeyDown(event);
              } else if (!isEnter) {
                hdlOnChange(event)
              }
            }}
            
            className={`input input-radious ${isError ? "input is-danger" : ""} ${classExtra}`}          
            type={typeInput}
            placeholder={textplace}
            name={name}
            {...(register && register(name, validationSchema))}
          />
          {title ? (
            <span className="float-span">{title}</span>
          ) : (
            <span onClick={() => console.log('Hola')} className="icon is-right">
              <i className={`mdi ${iconName} icon-blue cursor`}/>
            </span>
          )}
        </label>
      </p>
    </div>
  );
};
