import React from "react";
import "./../../../style/Inputs/text-area.css";

export const TextArea = (props) => {
  const {
    name,
    validationSchema,
    register,
    autoFocus,
    title,
    typeInput,
    classExtra,
    hdlOnkeyDown = () => {},
    hdlOnChange = () => {},
    textplace = "",
    isError = false,
    isEnter = false,
  } = props;
  return (
    <label className="float-label">
      <textarea
        class="textarea"
        autoFocus={autoFocus}
        onKeyDown={(event) => {
          if (isEnter && event.key === "Enter") {
            if (hdlOnkeyDown) hdlOnkeyDown(event);
          } else if (!isEnter) {
            hdlOnChange(event);
          }
        }}
        className={`textarea text-area-radius ${
          isError ? "input is-danger" : ""
        } ${classExtra}`}
        type={typeInput}
        placeholder={textplace}
        name={name}
        {...(register && register(name, validationSchema))}
      />

      <span className="float-span">{title}</span>
    </label>
  );
};

export default TextArea;
