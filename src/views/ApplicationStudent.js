import React, { useState, useEffect } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { TabsComponent } from "./../components/commond/Tabs";

import { useUsers } from "./../hooks/useUsers";
import { GreenButton } from "../components/ui/Buttons/GreenButton";
import { RedButton } from "../components/ui/Buttons/RedButton";
import { useAppStudent } from "../hooks/useAppStudent";
import { useStudentRech } from "../hooks/useStudentRech";
import { YellowButton } from "../components/ui/Buttons/YellowButton";

const ApplicationStudent = () => {
  const [users, setUsers] = useState([]);
  const { consultingStudentRequest } = useAppStudent();
  const [userRech, setUserRech] = useState([]);
  const { consultingStudentRech } = useStudentRech();

  useEffect(() => {
    showData();
    showRech();
  }, []);

  const showData = async () => {
    consultingStudentRequest()
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showRech = async () => {
    consultingStudentRech()
    .then((result) => {
      setUserRech(result);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  const [tabs, setTabs] = useState([
    {
      id: 1,
      tabName: "Solicitudes",
    },
    {
      id: 2,
      tabName: "Rechazados",
    },
  ]);
    // selecciona la vista de las tablas que se desea ver
    const [selectedTab, setSelectedTab] = useState(1);
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
      </div>
      {selectedTab === 1 && (
        <>
          <CardComponent classExtra="opacity-card card-users">
            <table className="table table-users is-fullwidth is-striped">
              <thead>
                <tr>
                  <th title="Matricula">Matricula.</th>
                  <th title="Nombre">Nombre.</th>
                  <th title="App">Apellido Paterno.</th>
                  <th title="Apm">Apellido Materno.</th>
                  <th title="Carrera">Carrera.</th>
                  <th title="Servicio a prestar">Servicio a prestar.</th>
                  <th title="button">Aceptar.</th>
                  <th title="button">Rechazar.</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.matricula} </td>
                        <td>{item.name}</td>
                        <td>{item.first_name}</td>
                        <td>{item.second_name}</td>
                        <td>{item.name_career}</td>
                        <td>{item.service_provide}</td>
                        <td>
                          <GreenButton buttonText="Aceptar" />
                        </td>
                        <td>
                          <YellowButton buttonText="Rechazar" />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </CardComponent>
        </>
      )}
      {selectedTab === 2 && (
        <>
          <CardComponent classExtra="opacity-card card-users">
            <table className="table table-users is-fullwidth is-striped">
              <thead>
                <tr>
                  <th title="Matricula">Matricula.</th>
                  <th title="Nombre">Nombre.</th>
                  <th title="App">Apellido Paterno.</th>
                  <th title="Apm">Apellido Materno.</th>
                  <th title="Carrera">Carrera.</th>
                  <th title="Servicio a prestar">Servicio a prestar.</th>
                  <th title="button">Aceptar.</th>
                  <th title="button">Eliminar.</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userRech ? (
                  userRech.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.matricula} </td>
                        <td>{item.name}</td>
                        <td>{item.first_name}</td>
                        <td>{item.second_name}</td>
                        <td>{item.name_career}</td>
                        <td>{item.service_provide}</td>
                        <td>
                          <GreenButton buttonText="Aceptar" />
                        </td>
                        <td>
                          <RedButton buttonText="Eliminar" />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </CardComponent>
        </>
      )}
    </div>
  );
};
export default ApplicationStudent;
