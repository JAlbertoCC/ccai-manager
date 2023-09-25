import React from "react";
import "./../../../style/Inputs/text-area.css";

export const TextArea = (props) => {
  const {
    name,
    value,
    validationSchema,
    register,
    autoFocus,
    title,
    typeInput,
    hdlOnChange = () => {},
    hdlOnkeyDown = () => {},
    isEnter = false,
    textplace = "",
  } = props;
  

  return (
    <div className="form-float scheme-de">
      <textarea
        class="textarea text-area"
        autoFocus={autoFocus}
        onChange={() => console.log(hdlOnChange)}
        onKeyDown={(event) => {
          if (isEnter && event.key === "Enter") {
            this.setState({ inputValue: event.target.value }); 
            if (hdlOnkeyDown) hdlOnkeyDown(event);
          } else if (!isEnter) {
            hdlOnChange(event);
          }
        }}
        type={typeInput}
        placeholder={textplace}
        name={name}
        value = {value}
        {...(register && register(name, validationSchema))}
      />


      <label class="floating-label">{title}</label>
    </div>
  );
};

export default TextArea;
