import React, { useState } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { AccordeonComponent } from "./../components/commond/AccordeonComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import "../style/global-styles.css"
const ProyectDetail = () => {
  const [showProyectInformation, setShowProyectInformation] = useState(false);
  const [showMembersInformation, setShowMembersInformation] = useState(false);
  const [showMaterialsInformation, setShowMaterialsInformation] =
    useState(false);
  const [showAdviserInformation, setShowAdviserInformation] = useState(false);

  const [proyectDetail, setProyectDetail] = useState([
    {
      id: 1,
      description: "DESCRIPCION DE COSA 1",
      justification: "JUSTIFICACION DEL PROYECTO",
      adjetivo: "OBJETIVO ",
      generalAdjetivo: " OBJETIVO GENERAL",
      specificObjectives: "OBJETIVOS ESPECIFICOS",
      benefits: "Beneficios ",
    },
  ]);

  // hook muestra y oculta vista informacion de proyecto
  const [showView, setShowView] = useState(false);

  const hdlOnClickEvent = () => {
    setShowView(!showView);
  };

  return (
    <div className="section">
      <div className="columnsPD">
        <div className="column is-12">
          <HeaderComponent title="Proyecto 3: Gestor del ccai" />
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
                title={showView ? "Guardar." :"Editar." }
                icon="square-edit-outline"
                extraClass="aling-right margin-right"
              />

              {showView ? (
                <div>
                  {proyectDetail.map((dataProyect) => (
                      <div key={dataProyect.id}>
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
                              <InputLabel  />
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
                              <InputLabel  />
                            </div>
                          </div>
                          <div className="column">
                            <p className="title-register">Objetivo general.</p>
                            <div className="column">
                              <InputLabel  />
                            </div>
                          </div>
                          <div className="column">
                            <p className="title-register">
                              Objetivo especifico.
                            </p>
                            <div className="column">
                              <InputLabel/>
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
                    ))}
                </div>
              ) : (
                <div>
                  <fieldset disabled>
                    {proyectDetail.map((dataProyect) => (
                      <div key={dataProyect.id}>
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
                              <label>  Justificacion </label>
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
                            <p className="title-register">Objetivo general.</p>
                            <div className="column">
                              <label> Objetivo general </label>
                            </div>
                          </div>
                          <div className="column">
                            <p className="title-register">
                              Objetivo especifico.
                            </p>
                            <div className="column">
                              <label>  Objetivo especifico </label>
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
                    ))}
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
