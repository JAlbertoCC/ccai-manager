import React, { useState, useEffect } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { TabsComponent } from "./../components/commond/Tabs";
import { TableComponent } from "./../components/commond/Table";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { CardComponent } from "./../components/ui/Cards/CardComponent";

const Resources = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      tabName: "Docentes",
    },
    {
      id: 2,
      tabName: "Alumnos",
    },
    {
      id: 3,
      tabName: "Materiales",
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="section">
      <div className="columns" style={{ width: "100%" }}>
        <div className="column is-12">
          <HeaderComponent title="Recursos" />
        </div>
        {/*diseño tabs   */}
        <div className="column is-12">
          <TabsComponent
            tabs={tabs}
            onChangeTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </div>

        {/*diseño botones  */}
        <div className="column is-12">
          <div>
            <ButtonIcon
              title="Generar reportes"
              icon="file-download-outline"
              extraClass="aling-right"
            />
            <ButtonIcon
              title="Agregar"
              icon="plus-circle"
              extraClass="aling-right margin-right"
            />
          </div>
        </div>

        {selectedTab === 1 && (
          <>
            {/*diseño tabla maestros  */}
            <div className="column is-12">
              <CardComponent classExtra="opacity-card card-proyects">
                <div>
                  <table className="table table-proyect is-fullwidth is-striped">
                    <thead>
                      <tr>
                        <th title="ID">ID.</th>
                        <th title="Nombre">Nombre.</th>
                        <th title="Apellido Paterno">Apellido Paterno.</th>
                        <th title="Apellido Materno">Apellido Materno.</th>
                        <th title="Matricula">Matricula.</th>
                        <th title="Sexo">Sexo.</th>
                        <th title="Carrera">Carrera.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td title="ID">ID.</td>
                        <td title="Nombre">Nombre.</td>
                        <td title="Apellido Paterno">Apellido Paterno.</td>
                        <td title="Apellido Materno">Apellido Materno.</td>
                        <td title="Matricula">Matricula.</td>
                        <td title="Sexo">Sexo.</td>
                        <td title="Carrera">Carrera.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardComponent>
            </div>
          </>
        )}
        {selectedTab === 2 && (
          <>
            {/*diseño tabla alumnos  */}
            <div className="column is-12">
              <CardComponent classExtra="opacity-card card-proyects">
                <div>
                  <table className="table table-proyect is-fullwidth is-striped">
                    <thead>
                      <tr>
                        <th title="ID">ID.</th>
                        <th title="Nombre">Nombre.</th>
                        <th title="Apellido Paterno">Apellido Paterno.</th>
                        <th title="Apellido Materno">Apellido Materno.</th>
                        <th title="Matricula">Matricula.</th>
                        <th title="Sexo">Sexo.</th>
                        <th title="Carrera">Carrera.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td title="ID">ID.</td>
                        <td title="Nombre">Nombre.</td>
                        <td title="Apellido Paterno">Apellido Paterno.</td>
                        <td title="Apellido Materno">Apellido Materno.</td>
                        <td title="Matricula">Matricula.</td>
                        <td title="Sexo">Sexo.</td>
                        <td title="Carrera">Carrera.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardComponent>
            </div>
          </>
        )}
        {selectedTab === 3 && (
          <>
            <p className="title-materials">aqui va la 3er tabla</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Resources;
