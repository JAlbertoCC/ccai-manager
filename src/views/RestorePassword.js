import React, { useState } from "react";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";
import { CardComponent } from "../components/ui/Cards/CardComponent";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";

const RestorePassword = () => {

    return (
        <div className="section">
            <div className="columns column38">
                <div className="column is-12">
                    <HeaderComponent title="volver" />
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