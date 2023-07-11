import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { useRegister } from '../hooks/useRegister';

import { useAuth } from "./../hooks/useAuth";
import { ErrorMessage } from "../components/ui/Warnings/ErrorMessage";

const Login = () => {
  const { userLogin } = useAuth();
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  const [iconPassword] = useState("mdi-eye-off");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
  const onSubmit = data => console.log(data);

  const [typeInputMail, setTypeInputMail] = useState("");

  const goToLink = (uri) => {
    navigate(uri);
  };

  const enterUser = () => {

      const body = {
        userName: typeInputMail,
        userPassword: typeInputPassword,
      };

      if (isDirty && isValid) enterNewUser(body);
    }

    const enterNewUser = (body) => {
      setShowError(false);
  
      userLogin(body)
       .then((item) => { 
          if (item.status === 400) {
            setShowError(true);
            setErrorMessage(item.message);
          } else {
            localStorage.accessToken = item.accessToken;
            goToLink('home');
          }
        })
        .catch((error) => {
          setShowError(true);
          setErrorMessage(error.message);
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
            isError={errors.email}
            name="email"
            hdlOnChange={(e) => setTypeInputMail(e.target.value)}
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
          {errors?.email && <p className="help is-danger" role="alert">{errors.email?.message}</p>}
          <InputLabel
            iconName={iconPassword}
            isPassword={true}
            isError={errors.pass}
            name="pass"
            textplace="Password"
            typeInput="password"
            hdlOnChange={(e) => setTypeInputPassword(e.target.value)}
            errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.pass && <p className="help is-danger" role="alert">{errors.pass?.message}</p>}
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
            hdlOnClickEvent={() => enterUser()}
          />
          <ButtonComponent
            buttonText="Registrarse"
            hdlOnClickEvent={() => goToLink("/register")}
          />
        </div>
      </CardComponent>
      </form>

      {showError ? 
        <ErrorMessage
          message={errorMessage}
          hdlOnClick={() => setShowError(!showError)}
        /> : <></>
      }
    </div>
  );
};

export default Login;
