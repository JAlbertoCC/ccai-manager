import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { useRegister } from '../hooks/useRegister';

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { checkingInternalRegister } = useRegister();
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  const [iconPassword, setIconPassword] = useState("mdi-eye-off");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
  const onSubmit = data => console.log(data);

  const [typeInputMail, setTypeInputMail] = useState("");
  const [typeInputPasswordLog, setTypeInputPasswordLog] = useState("");

  const changeType = () => {
    // mdi-eye-outline
    console.log("Hola");
    setTypeInputPassword("text");
  };

  const goToLink = (uri) => {
    navigate(uri);
  };

  const enterUser = () => {

      const body = {
        mail: typeInputMail,
        password: typeInputPassword,
      };
      
      if (isDirty && isValid) enterNewUser(body);
    }

    const enterNewUser = (body) => {
    checkingInternalRegister(body)
      .then((item) => {
        console.log("funciona");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }

  return (
    <div className="section login-content">
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </p>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <CardComponent classExtra="opacity-card">
        <figure className="image is-96x96 center-img">
          <img src={require("./../assets/logo.png")} alt="" />
        </figure>

        <div className="center-img inputs-content">
          <InputLabel
            iconName="mdi-account"
            typeInput="text"
            textplace="example@gmail.com"
            name="email"
            errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio",
                pattern: {
                  value: /^[A-Z0-9]+@TESE\.edu\.mx/i || /^[0-9]+@TESE\.edu\.mx/i,
                  message: "Formato incorrecto. "
                }
              }}
          />
          {errors?.email && <p role="alert">{errors.email?.message}</p>}
          <InputLabel
            iconName={iconPassword}
            typeInput={typeInputPassword}
            isPassword={true}
            name="pass"
            hdlOnClick={changeType}
            textplace="Password"
            errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.pass && <p role="alert">{errors.pass?.message}</p>}
          <div className="text-actions">
            <div>
              <a href="/">¿Haz olvidado tu contraseña?</a>
            </div>
            <div>
              <a href="/">Fechas de servicio y residencias</a>
            </div>
          </div>
        </div>

        <div className="buttons-content">
          <ButtonComponent
            buttonText="Iniciar sesión"
            onClick={() => enterUser()}
          />
          <ButtonComponent
            buttonText="Registrarse"
            hdlOnClickEvent={() => goToLink("/register")}
          />
        </div>
      </CardComponent>
      </form>
    </div>
  );
};

export default Login;
