import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import ButtonDecorative from "./../components/ui/Buttons/ButtonDecorative";
import { ModalComponent } from "../components/ui/Modal/ModalComponent";

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
                imgResource="Menu/focus.png"
                navOnclick={() => goToLink("/Proyects")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Articulos"
                backgroundColor="#f3d13e"
                imgResource="Menu/article.svg"
                navOnclick={() => goToLink("/Article")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Recursos"
                backgroundColor="#646463"
                imgResource="Menu/notebook.svg"
                navOnclick={() => goToLink("/resources")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Expediente"
                backgroundColor="#d5b61b"
                imgResource="Menu/notebook2.png"
                navOnclick={() => goToLink("/Proceedings")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Calendario CCAI"
                backgroundColor="#3ea56a"
                imgResource="Menu/calendar.svg"
                navOnclick={() => goToLink("/Calendar")}
              />
            </div>
            <div className="column is-6">
              <ButtonDecorative
                title="Información"
                backgroundColor="#646463"
                imgResource="Menu/search.svg"
                navOnclick={() => goToLink("/InformationView")}
              />
            </div>
            <div className="column is-6" style={{ margin: "auto" }}>
              <ButtonDecorative
                title="Usuarios registrados"
                backgroundColor="#60dd96"
                imgResource="Menu/user.png"
                navOnclick={() => goToLink("/users")}
              />
            </div>
            <div className="column is-6" style={{ margin: "auto" }}>
              <ButtonDecorative
                title="Cerrar sesión"
                backgroundColor="#c12529"
                imgResource="Menu/close.svg"
                navOnclick={() => goToLink("/")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
