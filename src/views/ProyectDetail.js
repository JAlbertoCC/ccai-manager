import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { AccordeonComponent } from "./../components/commond/AccordeonComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useProjectDetail } from "../hooks/useProjectDetail";
import { useUsers } from "./../hooks/useUsers";

import "../style/global-styles.css";

const ProyectDetail = () => {
  // hooks para mostrar u ocultar modales para agregar 
  const [showModal, setShowModal] = useState(false);
  const [showModalMat, setShowModalMat] = useState(false);
  const [showModalAs, setShowModalAs] = useState(false);
  // hooks para mostrar u ocultar la informacion del acordeon
  const [showProyectInformation, setShowProyectInformation] = useState(false);
  const [showMembersInformation, setShowMembersInformation] = useState(false);
  const [showMaterialsInformation, setShowMaterialsInformation] =
    useState(false);
  const [showAdviserInformation, setShowAdviserInformation] = useState(false);

  const [users, setUsers] = useState([]); //hook para mostrar lista de usuarios
  const { consultingstudentsAccepts } = useUsers(); // llama al hook
// hook confuncion que habilita o desabilita el boton de editar o guardar informacion del proyecto
  const [showView, setShowView] = useState(false); 
  const hdlOnClickEvent = () => {
    setShowView(!showView);
  };
  //parametros para mostarar informacion de proyect detail segun id
  const { id_project } = useParams();
  const navigate = useNavigate();
// hooks con la funcion la [traer datos, devolver datos en tabla]
  const [projectDetail, setProjectDetail] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [resourcesDetail, setResourcesDetail] = useState([]);
  const [adviserDetail, setAdviserDetail] = useState([]);
  const {
    listProjectInfo,
    listStudentsInProject,
    listResourceBorrowedInProject,
    adviserInProject,
  } = useProjectDetail(); // llama la funcion flecha del hook para traer las consultas asincronas

  //hook useEffect para mandar el ID del proyecto en las consultas
  useEffect(() => {
    showData();
    detailProject();
    detailStudent();
    detailResources();
    detailAdviser();
  }, [id_project]);
  //funcion para llamar los datos de los proyect detail
  const detailProject = async () => {
    await listProjectInfo(id_project)
      .then((result) => {
        setProjectDetail(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // funcion para llamar los integrantes del proyecto (Alumnos)
  const detailStudent = async () => {
    await listStudentsInProject(id_project)
      .then((result) => {
        setStudentDetail(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // funcion para llamar los recursos prestados al proyecto
  const detailResources = async () => {
    await listResourceBorrowedInProject(id_project)
      .then((result) => {
        setResourcesDetail(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // funcion flecha que muestra los docentes asignados al proyecto
  const detailAdviser = async () => {
    await adviserInProject(id_project)
      .then((result) => {
        setAdviserDetail(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //funcion para llamar los datos de usuarios (alumnos) aceptados para el modal de agregar integrante
  const showData = async () => {
    consultingstudentsAccepts()
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="section">
      <div className="columns column38">
        <div className="column is-12">
          <HeaderComponent title="Proyecto 3: Gestor del ccai" />
          {/** Diseño del modal para visialisar estudiantes y agregar */}
          {showModal ? (
            <ModalComponentGlobal
              title="Agregar Integrante" //added title to green botton
              isActive={showModal}
              hdlOnclick={() => setShowModal(!showModal)}
              titleGreen="Agregar"
              hdlOnClickGreen=""
              titleRed="Cancelar"
              hdlOnClickRed={() => setShowModal(!showModal)}
            >
              {/*diseño tabla  */}
              <div className="column is-12">
                <CardComponent classExtra="opacity-card card-proyects">
                  <div>
                    <table className="table table-proyect is-fullwidth is-striped">
                      <thead>
                        <tr>
                          <th title="Nombre">Nombre.</th>
                          <th title="Matricula">Matricula.</th>
                          <th title="Carrera">Carrera.</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users ? (
                          users.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.matricula}</td>
                                <td>{item.name_career}</td>
                                <td>
                                  <i className="mdi mdi-account-group icon-blue"></i>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardComponent>
              </div>
            </ModalComponentGlobal>
          ) : (
            <></>
          )}
          {/** Diseño del modal para agregar materiales */}
          {showModalMat ? (
            <ModalComponentGlobal
              title="Agregar Material" //added title to green botton
              isActive={showModalMat}
              hdlOnclick={() => setShowModalMat(!showModalMat)}
              titleGreen="Agregar"
              hdlOnClickGreen=""
              titleRed="Cancelar"
              hdlOnClickRed={() => setShowModalMat(!showModalMat)}
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
          {/** Modal para agregar un asesor al proyecto y a alumnos */}
          {showModalAs ? (
            <ModalComponentGlobal
              title="Agregar Asesor" //added title to green botton
              isActive={showModalAs}
              hdlOnclick={() => setShowModalAs(!showModalAs)}
              titleGreen="Agregar"
              hdlOnClickGreen=""
              titleRed="Cancelar"
              hdlOnClickRed={() => setShowModalAs(!showModalAs)}
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
                      return (
                        <div key={index}>
                          <div className="columns container proyect-detail">
                            <div className="column">
                              <p className="title-register">Descripcion</p>
                              <div className="column">
                                <InputLabel />
                              </div>
                            </div>
                            <div className="column">
                              <p className="title-register">Justificacion</p>
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
                                  <label> {item.description} </label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">Justificacion.</p>
                                <div className="column">
                                  <label> {item.justification} </label>
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
                                  <label> {item.objectives} </label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">
                                  Objetivo general.
                                </p>
                                <div className="column">
                                  <label> {item.general_objective}</label>
                                </div>
                              </div>
                              <div className="column">
                                <p className="title-register">
                                  Objetivo especifico.
                                </p>
                                <div className="column">
                                  <label> {item.specific_objective} </label>
                                </div>
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <p className="title-register">Beneficion.</p>
                                <div className="column">
                                  <label> {item.benefits} </label>
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
                <ButtonIcon
                          title="Agregar integrante"
                          icon="plus-circle"
                          extraClass="aling-right margin-right"
                          hdlOnClickEvent={() => setShowModal(!showModal)}
                        />
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Matricula">Matricula.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Servicio a prestar">Servicio a prestar.</th>
                      <th title="Carrera">Carrera.</th>
                      <th title="Button Add">
                        
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetail ? (
                      studentDetail.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td title="ID">{item.id_student}</td>
                            <td title="Matricula">{item.matricula}</td>
                            <td title="Nombre">{item.name}</td>
                            <td title="Servicio a prestar">
                              {item.service_name}
                            </td>
                            <td title="Carrera">{item.name_career}</td>
                            <td>
                              <i className="mdi mdi-trash-can-outline icon-blue"></i>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
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
                <ButtonIcon
                  title="Solicitar"
                  icon="plus-circle"
                  extraClass="aling-right margin-right"
                  hdlOnClickEvent={() => setShowModalMat(!showModalMat)}
                />
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Descripcion">Descripcion.</th>
                      <th title="Cantidad">Cantidad.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resourcesDetail ? (
                      resourcesDetail.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td title="ID">{item.id_resource_borrowed}</td>
                            <td title="Nombre">{item.resoruce_name}</td>
                            <td title="Nombre">{item.description}</td>
                            <td title="Cantidad">{item.amount}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
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
                    {adviserDetail ? (
                      adviserDetail.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td title="ID">{item.id_adviser}</td>
                            <td title="Nombre">{item.name_adviser}</td>
                            <td title="Division">{item.division}</td>
                            <td title="Tipo de Asesorr">{item.type_adviser}</td>
                            <td>
                              <i className="mdi mdi-pencil icon-blue"></i>
                              <i className="mdi mdi-trash-can-outline icon-blue"></i>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
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
