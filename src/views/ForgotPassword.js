import React from "react";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

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
              <button className="modal-close is-large" aria-label="close"></button>
            </div>
            <form onSubmit="{handleSubmit(onSubmit)}">
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
                    name="email"
                    hdlOnChange=""
                    errors=""
                    register=""
                    validationSchema={{
                      required: "Este campo es obligratorio",
                      pattern: {
                        value: /^[A-Z0-9]+@TESE\.edu\.mx/i || /^[0-9]+@TESE\.edu\.mx/i,
                        message: "Formato incorrecto. "
                      }
                    }}
                  />
                  <InputLabel
                    title="Ingrese Email"
                    iconName="mdi-account"
                    typeInput="text"
                    textplace="example@gmail.com"
                    isError=""
                    name="email"
                    hdlOnChange=""
                    errors=""
                    register=""
                    validationSchema={{
                      required: "Este campo es obligratorio",
                      pattern: {
                        value: /^[A-Z0-9]+@TESE\.edu\.mx/i || /^[0-9]+@TESE\.edu\.mx/i,
                        message: "Formato incorrecto. "
                      }
                    }}
                  />
                </div>

                <div className="buttons-content">
                  <ButtonComponent
                    buttonText="Enviar"
                    hdlOnClickEvent={() =>
                      goToLinkRestore("/restore-password")}
                  />
                  <ButtonComponent
                    buttonText="Cancelar"
                    hdlOnClickEvent=""
                  />
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