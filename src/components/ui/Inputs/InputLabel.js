import React from "react";

export const InputLabel = (props) => {
  const {
    name,
    value,
    validationSchema,
    register,
    autoFocus,
    title,
    iconName,
    typeInput,
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
            onChange={() => console.log(hdlOnChange)}
            onKeyDown={(event) => {
              if (isEnter && event.key === "Enter") {
                this.setState({ InputLabel: event.target.value }); //inputValue
                if (hdlOnkeyDown) hdlOnkeyDown(event);
              } else if (!isEnter) {
                hdlOnChange(event);
              }
            }}
            className={`input input-radious ${
              isError ? "input is-danger" : " "
            } ${classExtra}`}  
            type={typeInput}
            placeholder={textplace}
            name={name}
            value={value}
            {...(register && register(name, validationSchema))}
          />
          {title ? (
            <span className="float-span">{title}</span>
          ) : (
            <span onClick className="icon is-right"> 
              <i className={`mdi ${iconName} icon-blue cursor`} />
            </span> //Este span muestra el ¿Haz olvidado la contraseña y fechas de servicio y residencias
          )}
        </label>
      </p>
    </div>
  );
};

