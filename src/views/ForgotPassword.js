import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import axios from "axios";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { forgotPasswordTwo } from "../utils/auth";

import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { usersForgotPassword } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const [typeEmail, setTypeInputMail] = useState("");
  const [typeMatricula, setTypeInputMatricula] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (data) => console.log(data);

  const changeFormPassword = () => {
    const body = {
      matricula: typeMatricula,
      institutional_email: typeEmail,
    };

    if (isDirty && isValid) registerValidationForm(body);
  };

  const registerValidationForm = (body) => {
    setShowError(false);
    usersForgotPassword(body)
      .then((item) => {
        if (item.status === 400 || item.status === 404) {
          setShowError(true);
          setErrorMessage(item.message);
        } else {
          localStorage.accessToken = item.accessToken;
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const goToLink = (uri) => {
    navigate(uri);
  };

  const enterNewUser = (body) => {
    setShowError(false);

    registerValidationForm(body) ///se hace con la carpeta forgot password
      .then((item) => {
        if (item.status === 400) {
          setShowError(true);
          setErrorMessage(item.message);
        } else {
          localStorage.accessToken = item.accessToken;
          console.log(item.accessToken);
          goToLink("home");
        }
      })
      .catch((error) => {
        setShowError(true);
        setErrorMessage(error.message);
      });
  };

  const navigate = useNavigate();
  const goToLinkRestore = (uri, projectId) => {
    navigate(`${uri}/${projectId}`);
  };

  return (
    <div className="section">
      <div className="columns column38">
        <div className="column is-12">
          <HeaderComponent title="volver" />
          <div className="section login-content"></div>

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
              <button
                className="modal-close is-large"
                aria-label="close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardComponent classExtra="opacity-card">
                <figure className="image is-96x96 center-img">
                  <img src={require("./../assets/logo.png")} alt="" />
                </figure>

                <div className="center-img inputs-content">
                  <InputLabel
                    title="Ingrese Maricula"
                    iconName="mdi-account"
                    typeInput="text"
                    textplace=""
                    isError=""
                    name="matricula" //aqui estaba email, lo cambie a matricula
                    hdlOnChange={(e) => setTypeInputMatricula(e.target.value)}
                    errors=""
                    register={register}
                    validationSchema={{
                      required: "Este campo es obligratorio",
                      pattern: {
                        value:
                          /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/i,
                        message: "Formato incorrecto. ",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximo 10 caracteres.",
                      },
                    }}
                  />

                  <InputLabel
                    title="Ingrese Email"
                    iconName="mdi-account"
                    typeInput="text"
                    hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                    textplace="example@gmail.com"
                    isError=""
                    name="institutional_email" //modifique aqui, estaba vacio
                    errors=""
                    register={register}
                    validationSchema={{
                      required: "Este campo es obligratorio",
                      pattern: {
                        value:
                          /^[A-Z0-9]+@TESE\.edu\.mx/i ||
                          /^[0-9]+@TESE\.edu\.mx/i,
                        message: "Formato incorrecto. ",
                      },
                    }}
                  />
                </div>

                <div className="buttons-content">
                  <ButtonComponent
                    buttonText="Enviar"
                    hdlOnClickEvent={() => goToLinkRestore("/restore-password")}
                  />
                  <ButtonComponent buttonText="Cancelar" />
                </div>
              </CardComponent>
            </form>

            {/* {showError ? 
        <ErrorMessage
          message="{errorMessage}"
          hdlOnClick="{() => setShowError(!showError)}"
        /> : <></>
      } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
