import React from "react";

import { useNavigate } from "react-router-dom";
import ButtonDecorative from "./../components/ui/Buttons/ButtonDecorative";
import { ModalComponent } from "../components/ui/Modal/ModalComponent";

import { useState } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const goToLink = (uri) => {
    navigate(uri);
  };

  return (
    <div className="section">
      <div
        className="columns"
        style={{ height: "70vh", width: "100%", marginTop: "2%" }}
      >
        <div
          className="column is-6"
          style={{ margin: "auto", textAlign: "center" }}
        >
          <p className="cart-title">
            Centro de Cooperación Academica Industria
          </p>
          <p className="cart-title">CCAI - TESE</p>
          <p className="subtitle width-text">
            Tecnológico de Estudios Superiores de Ecatepec
          </p>
        </div>
        <div className="column is-6" style={{ margin: "auto", width: "50%" }}>
          <div className="columns">
            <div className="column is-6">
              <ButtonDecorative
                title="Proyecto"
                backgroundColor="#db6949"
                icon="lightbulb-variant-outline "
                navOnclick={() => goToLink("/Proyects")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Articulos"
                backgroundColor="#f3d13e"
                icon="file-document "
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Recursos"
                backgroundColor="#646463"
                icon="calendar-text "
                navOnclick={() => goToLink('/Resources') }
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Expediente"
                backgroundColor="#d5b61b"
                icon="folder"
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Calendario CCAI"
                backgroundColor="#3ea56a"
                icon="calendar-multiselect-outline "
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Información"
                backgroundColor="#646463"
                icon="magnify "
              />
            </div>
            <div className="column is-6" style={{ margin: "auto" }}>
              <ButtonDecorative
                title="Usuarios registrados"
                backgroundColor="#60dd96"
                icon="power-standby "
                navOnclick={() => goToLink("/users")}
              />
            </div>
            <div className="column is-6" style={{ margin: "auto" }}>
              <ButtonDecorative
                title="Cerrar sesión"
                backgroundColor="#c12529"
                icon="power-standby "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
