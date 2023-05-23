import React, { useState, useEffect } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { useNavigate } from "react-router-dom";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { TextArea } from "../components/ui/Inputs/TextArea";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { mdiMinus } from '@mdi/js';
import { mdiPlusBoxOutline } from '@mdi/js';

const Proyects = () => {
  const navigate = useNavigate();
  const goToLink = (uri) => {
    navigate(uri);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="section">
      <HeaderComponent title="Proyectos" />
      {showModal ? (
        <ModalComponentGlobal
          titleGreen="Agregar Proyecto" //added title to green botton
          titleRed="Cancelar" //added title to red botton
          class="opacity-card"
          isActive="false"
          hdlOnclick={() => setShowModal(!showModal)}
        >
          <div className="column is-11">
            <p className="title-register">NUEVO PROYECTO</p>
          </div>
          <InputLabel title="Nombre del proyecto" label="" type="text" />
          <div class="columns" style={{ marginTop: "30px", width: "600px" }}>
            <div class="column" style={{ width: "250px"}}>

              <TextArea  title="Justificación del proyecto" label="" type="text"></TextArea>

              
            </div>

            <div class="column" style={{ width: "100px" }}>
            <TextArea  title="Beneficios del proyecto" label="" type="text"></TextArea>
            </div>
          </div>
          <div class="column">
            <InputLabel
              title="Objetivo general"
              label=""
              type="text"
              style={{ marginTop: "30px" }}
            />
          </div>
          <div className="column is-4">
            <p className="title-objectives is-left">Objetivos Específicos</p>
          </div>
          <div class="columns">
            <div class="column is-6">
              <InputLabel label="" type="text" />
            </div>
            <div class="column is-one-fifth" style={{ marginTop: "10px" }}>
              <button style={{background: "transparent", border: "none", cursor: "pointer"}}>
                <span className="icon-plus">
                  <Icon path={mdiPlus}
                  title="IconPlus"
                  size={1}
                  horizontal
                  vertical
                  color="green"
                  />
                </span>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <InputLabel label="" type="text" />
            </div>
            <div class="column is-one-fifth" style={{ marginRight: "20px" }}>
              <button style={{background: "transparent", border: "none", cursor: "pointer"}}>
                <span className="icon-minus">
                  <Icon path={mdiMinus} size={1} 
                  color="red"
                  />
                </span>
              </button>
            </div>
          </div>
        </ModalComponentGlobal>
      ) : (
        <></>
      )}
      <div className="column is-12">
        <ButtonIcon
          title="Generar reportes"
          icon="file-download-outline"
          className="button button-new-project"
          extraClass="aling-right"
        />
        <button  style={{width: '130px', marginTop: '10px'}} 
        class="ButtonIcon"
          title="Agregar proyecto"
          className="button button-new-project"
          onClick={() => setShowModal(!showModal)}
        >
          <span className="icon is-right">
            <Icon path={mdiPlusBoxOutline} size={1}/>
          </span>
        </button>
      </div>
      <div className="column is-12">
        <CardComponent classExtra="opacity-card card-proyects">
          <div>
            <table className="table table-proyect is-fullwidth is-striped">
              <thead>
                <tr>
                  <th title="ID">ID.</th>
                  <th>Nombre del proyecto.</th>
                  <th title="Objetivo">Objetivo.</th>
                  <th title="Beneficios">Beneficios.</th>
                  <th title="Asesores">Asesores.</th>
                  <th title="Cronograma de actividades">
                    Cronograma de actividades.
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td title="ID">ID.</td>
                  <td>Nombre del proyecto.</td>
                  <td title="Objetivo">Objetivo.</td>
                  <td title="Beneficios">Beneficios.</td>
                  <td title="Asesores">Asesores.</td>
                  <td title="Cronograma de actividades">
                    Cronograma de actividades.
                  </td>
                  <td>
                    <i
                      className="mdi mdi-eye icon-blue"
                      onClick={() => goToLink("/proyect-detail")}
                    ></i>
                    <i className="mdi mdi-trash-can-outline icon-blue"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};
export default Proyects;
