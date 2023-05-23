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
    textplace = "",
  } = props;
  return (
    <div className="form-float scheme-de">
      <textarea
        class="textarea text-area"
        autoFocus={autoFocus}
        type={typeInput}
        placeholder={textplace}
        name={name}
        {...(register && register(name, validationSchema))}
      />

      <label class="floating-label">{title}</label>
    </div>
  );
};

export default TextArea;
