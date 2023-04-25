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
    hdlOnkeyDown,
    hdlOnChange,
    textplace = "",
    isError=false
  } = props;

  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            autoFocus={autoFocus}
            onKeyDown={(event) => {
              
              if (event.key === "Enter") {
                if (hdlOnkeyDown) hdlOnkeyDown(event);
              }
            }}
            onChange={hdlOnChange}
            className={`input input-radious ${isError ? "input is-danger" : ""} ${classExtra}`}          
            type={typeInput}
            placeholder={textplace}
            name={name}
            {...(register && register(name, validationSchema))}
          />
          {title ? (
            <span className="float-span">{title}</span>
          ) : (
            <span className="icon is-right" style={{ cursor: "pointer" }}>
              <i
                className={`mdi ${iconName} icon-blue`}
                onClick={() => hdlOnClick}
              />
            </span>
          )}
        </label>
      </p>
    </div>
  );
};
