import React, { useState, useEffect } from "react";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { useParams } from "react-router-dom";
import { useRestorePassword } from "../hooks/useRestorePassword";

const RestorePassword = () => {

    const [detailPass, setDetailPass] = useState([]);
    const { restorePass } = useRestorePassword();
    const params = useParams();
    console.log(params);

    
  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    restorePass()
      .then((result) => {
        setDetailPass(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
        <div className="section">
            {/*Encabezado*/}
            <div className="columns column38">
                <div className="column is-12">
                    <HeaderComponent title="volver" />
                    <div className="section login-content">
                        {/*Imagen*/}
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
                        {/*Empieza el formulario*/}
                        <form onSubmit="{handleSubmit(onSubmit)}">
                            <CardComponent classExtra="opacity-card">
                                {/*Logo*/}
                                <figure className="image is-96x96 center-img">
                                    <img src={require("./../assets/logo.png")} alt="" />
                                </figure>
                                {/*Campos donde va la contraseña*/}
                                <div className="center-img inputs-content">
                                    <InputLabel
                                        title="Password"
                                        iconName="mdi-eye-off"
                                        isPassword=""
                                        name="pass"
                                        textplace="Password"
                                        typeInput="password"
                                        hdlOnChange="{(e) => setTypeInputPassword(e.target.value)}"
                                        errors="{errors}"
                                        validationSchema=""
                                    />
                                    <InputLabel
                                        title="Confirm Password"
                                        iconName="mdi-eye-off"
                                        isPassword=""
                                        name="pass"
                                        textplace="Password"
                                        typeInput="password"
                                        hdlOnChange="{(e) => setTypeInputPassword(e.target.value)}"
                                        errors="{errors}"
                                        validationSchema=""
                                    />
                                </div>
                                {/*Boton de confirmacion de envio de formulario*/}
                                <div className="buttons-content">
                                    <ButtonComponent
                                        buttonText="Confirmar"
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
export default RestorePassword;