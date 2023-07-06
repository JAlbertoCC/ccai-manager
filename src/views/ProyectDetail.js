import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { AccordeonComponent } from "./../components/commond/AccordeonComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";
import { useParams } from "react-router-dom";
import { useProjectDetail } from "../hooks/useProjectDetail";

import "../style/global-styles.css";

const ProyectDetail = () => {
  //muestra u oculta los modales de agregar
  const [showModal, setShowModal] = useState(false);
  const [showModalMat, setShowModalMat] = useState(false);
  const [showModalAs, setShowModalAs] = useState(false);
  //muestra u oculta los modales de editar
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalMatEdit, setShowModalMatEdit] = useState(false);
  const [showModalAsEdit, setShowModalAsEdit] = useState(false);

  //Funcion para mostrar u ocultar informacion en los acordeon
  const [showProyectInformation, setShowProyectInformation] = useState(false);
  const [showMembersInformation, setShowMembersInformation] = useState(false);
  const [showMaterialsInformation, setShowMaterialsInformation] =
    useState(false);
  const [showAdviserInformation, setShowAdviserInformation] = useState(false);

  // hook muestra y oculta vista informacion de proyecto
  const [showView, setShowView] = useState(false);
  const hdlOnClickEvent = () => {
    setShowView(!showView);
  };

  //parametros para mostarar informacion de proyect detail segun id
  const [projectDetail, setProjectDetail] = useState([]);
  const { consulProjectInfo } = useProjectDetail();
  const params = useParams();
  console.log(params);

  return (
    <div className="section">
      <div className="columns column38">
        {/* componetes para mostar modales */}
        <div className="column is-12">
          <HeaderComponent title="Proyecto 3: Gestor del ccai" />
          {/** Modal para agregar estudiantes */}
          {showModal ? (
            <ModalComponentGlobal
              title="Agregar Integrante" //added title to green botton
              titleRed="Cancelar"
              titleGreen="Agregar integrante" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModal(!showModal)}
            >
              <div class="columns column5157">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column5157">
                <div class="column">
                  <InputLabel title="Matricula" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD ">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD">
                <div class="column">
                  <InputLabel title="Servicio a prestar" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD">
                <div class="column">
                  <InputLabel title="Carrera" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
          {/*modal para agregar materiales */}
          {showModalMat ? (
            <ModalComponentGlobal
              title="Agregar Material" //added title to green botton
              titleRed="Cancelar"
              titleGreen="Agregar Material" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModalMat(!showModalMat)}
            >
              <div class="columns column94">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Descripcion" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Cantidad" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
          {/* modal para agregar asesores */}
          {showModalAs ? (
            <ModalComponentGlobal
              title="Agregar Asesor" //added title to green botton
              titleRed="Cancelar"
              titleGreen="Agregar Asesor" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModalAs(!showModalAs)}
            >
              <div class="columns column94">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Division" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Tipo de Asesor" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
        </div>
        <>
        {/** Modales para editar datos de las blas integrantes, materiales y docentes  */}
        {/** Modal para agregar estudiantes */}
        {showModalEdit ? (
            <ModalComponentGlobal
              title="Editar Integrante" //added title to green botton
              titleRed="Cancelar"
              titleGreen="Editar integrante" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModalEdit(!showModalEdit)}
            >
              <div class="columns column5157">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column5157">
                <div class="column">
                  <InputLabel title="Matricula" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD ">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD">
                <div class="column">
                  <InputLabel title="Servicio a prestar" label="" type="text" />
                </div>
              </div>

              <div class="columns columnsProyectD">
                <div class="column">
                  <InputLabel title="Carrera" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
          {/*modal para agregar materiales */}
          {showModalMatEdit ? (
            <ModalComponentGlobal
              title="Editar Material" //added title to green botton
              titleRed="Cancelar"
              titleGreen="EditarEditar Material" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModalMatEdit(!showModalMatEdit)}
            >
              <div class="columns column94">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Descripcion" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Cantidad" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
          {/* modal para agregar asesores */}
          {showModalAsEdit ? (
            <ModalComponentGlobal
              title="Editar Asesor" //added title to green botton
              titleRed="Cancelar"
              titleGreen="Editar Asesor" //added title to red botton
              class="opacity-card"
              isActive="false"
              hdlOnclick={() => setShowModalAsEdit(!showModalAsEdit)}
            >
              <div class="columns column94">
                <div class="column">
                  <InputLabel title="ID" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Division" label="" type="text" />
                </div>
              </div>

              <div class="columns column94">
                <div class="column">
                  <InputLabel title="Tipo de Asesor" label="" type="text" />
                </div>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
        </>

        <div className="column is-12">
          <CardComponent classExtra="opacity-card card-proyects">
            {/* Collapsive */}
            <AccordeonComponent
              title="Información del proyecto."
              hdlOnShowContent={() =>
                setShowProyectInformation(!showProyectInformation)
              }
              isActive={showProyectInformation}
              iconTitle="mdi-text-box-search-outline"
            >
              <ButtonIcon
                hdlOnClickEvent={hdlOnClickEvent}
                title={showView ? "Guardar." : "Editar."}
                icon="square-edit-outline"
                extraClass="aling-right margin-right"
              />

              {showView ? (
                <div>
                  {projectDetail ? (
                    projectDetail.map((item, index) => {
                      console.log(item);
                      return (
                        <div key={projectDetail.id}>
                          <div className="columns container proyect-detail">
                            <div className="column">
                              <p className="title-register">Descripcion.</p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                            <div className="column">
                              <p className="title-register">Justificacion.</p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="column">
                              <p className="title">Objetivos.</p>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <p className="title-register">Objetivo.</p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                            <div className="column">
                              <p className="title-register">
                                Objetivo general.
                              </p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                            <div className="column">
                              <p className="title-register">
                                Objetivo especifico.
                              </p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <p className="title-register">Beneficion.</p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <div>
                  <fieldset disabled>
                    {projectDetail ? (
                      projectDetail.map((item, index) => {
                        console.log(item);
                        return (
                          <div key={index}>
                            <div className="columns container proyect-detail">
                              <div className="column">
                                <p className="title-register">Descripcion.</p>
                                <div className="column">
                                  <label> Descripcion </label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">Justificacion.</p>
                                <div className="column">
                                  <label> Justificacion </label>
                                </div>
                              </div>
                            </div>
                            <div className="column">
                              <div className="column">
                                <p className="title">Objetivos.</p>
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <p className="title-register">Objetivo.</p>
                                <div className="column">
                                  <label> Objetivos </label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">
                                  Objetivo general.
                                </p>
                                <div className="column">
                                  <label> Objetivo general </label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">
                                  Objetivo especifico.
                                </p>
                                <div className="column">
                                  <label> Objetivo especifico </label>
                                </div>
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <p className="title-register">Beneficion.</p>
                                <div className="column">
                                  <label> Beneficio </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </fieldset>
                </div>
              )}
            </AccordeonComponent>

            <AccordeonComponent
              title="Integrantes."
              hdlOnShowContent={() =>
                setShowMembersInformation(!showMembersInformation)
              }
              isActive={showMembersInformation}
              iconTitle="mdi-account-group"
            >
              <div>
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Matricula">Matricula.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Servicio a prestar">Servicio a prestar.</th>
                      <th title="Carrera">Carrera.</th>
                      <th title="Button Add">
                        <ButtonIcon
                          title="Agregar integrante"
                          icon="plus-circle"
                          extraClass="aling-right margin-right"
                          hdlOnClickEvent={() => setShowModal(!showModal)}
                        />
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td title="ID">ID.</td>
                      <td title="Matricula">Matricula.</td>
                      <td title="Nombre">Nombre.</td>
                      <td title="Servicio a prestar">Servicio a prestar.</td>
                      <td title="Carrera">Carrera.</td>
                      <td>
                        <i className="mdi mdi-pencil icon-blue"
                        onClick={() => setShowModalEdit(!showModalEdit)}></i>
                        <i className="mdi mdi-trash-can-outline icon-blue"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordeonComponent>

            <AccordeonComponent
              title="Materiales."
              hdlOnShowContent={() =>
                setShowMaterialsInformation(!showMaterialsInformation)
              }
              isActive={showMaterialsInformation}
              iconTitle="mdi-palette-swatch"
            >
              <div>
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Descripcion">Descripcion.</th>
                      <th title="Cantidad">Cantidad.</th>
                      <th title="Button Add">
                        <ButtonIcon
                          title="Agregar material"
                          icon="plus-circle"
                          extraClass="aling-right margin-right"
                          hdlOnClickEvent={() => setShowModalMat(!showModalMat)}
                        />
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td title="ID">ID.</td>
                      <td title="Nombre">Nombre.</td>
                      <td title="Nombre">Nombre.</td>
                      <td title="Cantidad">Cantidad.</td>
                      <td>
                        <i className="mdi mdi-pencil icon-blue"
                        onClick={() => setShowModalMatEdit(!showModalMatEdit)}></i>
                        <i className="mdi mdi-trash-can-outline icon-blue"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordeonComponent>

            <AccordeonComponent
              title="Asesores."
              hdlOnShowContent={() =>
                setShowAdviserInformation(!showAdviserInformation)
              }
              isActive={showAdviserInformation}
              iconTitle="mdi-account-group-outline"
            >
              <div>
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Division">Division.</th>
                      <th title="Tipo de Asesor">Tipo de Asesor.</th>
                      <th title="Button Add">
                        <ButtonIcon
                          title="Agregar asesor"
                          icon="plus-circle"
                          extraClass="aling-right margin-right"
                          hdlOnClickEvent={() => setShowModalAs(!showModalAs)}
                        />
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td title="ID">ID.</td>
                      <td title="Nombre">Nombre.</td>
                      <td title="Division">Division.</td>
                      <td title="Tipo de Asesorr">Tipo de Asesor.</td>
                      <td>
                        <i className="mdi mdi-pencil icon-blue"
                          onClick={() => setShowModalAsEdit(!showModalAsEdit) }></i>
                        <i className="mdi mdi-trash-can-outline icon-blue"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordeonComponent>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default ProyectDetail;
