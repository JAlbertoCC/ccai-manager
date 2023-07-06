import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { TabsComponent } from "./../components/commond/Tabs";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "./../components/ui/Inputs/InputLabel";
import { ModalComponentGlobal } from "../components/ui/Modal/ModalComponentGlobal";
import { DropDown } from "./../components/ui/DropDown/DropDown";
import { useStudents } from "./../hooks/useStudents";
import { useMaterials } from "./../hooks/useMaterials";
import { TextArea } from "../components/ui/Inputs/TextArea";
import { useDocent } from "../hooks/useDocent";

const Resources = () => {
  //HOOK para llamar los datos de la appi ya agruparlos
  const [users, setUsers] = useState([]);
  const { consultingStudentsData } = useStudents();
  const [materials, setMaterials] = useState([]);
  const { consultMaterials } = useMaterials();
  const [docent, setDocent] = useState([]);
  const { consultTeacher } = useDocent();

  useEffect(() => {
    showData();
  }, []);
  const showData = async () => {
    consultingStudentsData()
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showDataMaterials();
  }, []);
  const showDataMaterials = async () => {
    consultMaterials()
      .then((result) => {
        setMaterials(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    showDocent();
  }, []);
  const showDocent = async () => {
    consultTeacher()
      .then((result) => {
        setDocent(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
  const [genderList] = useState([
    {
      id: "M",
      name: "Masculino",
    },
    {
      id: "F",
      name: "Femenino",
    },
  ]);
  const [listCarrer] = useState([
    {
      id: 1,
      name: "Ingeniería en Sistemas Computacionales",
    },
    {
      id: 2,
      name: "Ingeniería Informática",
    },
    {
      id: 3,
      name: "Ingeniería Electrónica",
    },
    {
      id: 4,
      name: "Ingeniería Mecatrónica",
    },
    {
      id: 5,
      name: "Contador Público",
    },
    {
      id: 6,
      name: "Ingeniería Mecánica",
    },
    {
      id: 7,
      name: "Ingeniería Gestión Empresarial",
    },
    {
      id: 8,
      name: " Ingeniería Aeronáutica",
    },
    {
      id: 9,
      name: "Ingeniería Bioquímica",
    },
    {
      id: 10,
      name: "Ingeniería Química",
    },
    {
      id: 11,
      name: "Ingeniería Industrial",
    },
  ]);
  // hooks
  // selecciona la vista de las tablas que se desea ver
  const [selectedTab, setSelectedTab] = useState(1);

  // muestra u oculta los modales de agregar
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  // muestra u oculta los modales de editar
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModal2Edit, setShowModal2Edit] = useState(false);
  const [showModal3Edit, setShowModal3Edit] = useState(false);

  const [typeInputGender, setTypeInputGender] = useState();

  const handleModalOpen = () => {
    setShowModal(!showModal);
  };

  const handleAddClick = () => {
    // Lógica para agregar alumno o docente
    setShowModal(false);
  };
  // funcion para cambiar el titulo de los modales de agregar dependiendo de la TAB donde se encuentre el usuario
  const getTitle = () => {
    if (selectedTab === 1) {
      return "Nuevo Docente";
    } else if (selectedTab === 2) {
      return "Nuevo Alumno";
    } else if (selectedTab === 3) {
      return "Nuevo Material";
    }
    return "";
  };

  const getButtonText = () => {
    if (selectedTab === 1) {
      return "Agregar Docente";
    } else if (selectedTab === 2) {
      return "Agregar Alumno";
    } else if (selectedTab === 3) {
      return "Agregar Material";
    }
    return "";
  };

  useEffect(() => {}, []);
  //
  return (
    <div className="section">
      {/* Diseño de modales para agregar datos a las tablas DOCENTE ALUMNO Y MATERIAL */}
      <>
        {/* Componente del Modal  para agregar docentes */}
        {showModal ? (
          <ModalComponentGlobal
            title=""
            isActive=""
            hdlOnclick=""
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed=""
          >
            <div className="columns-margen">
              <div className="columns ">
                <div className="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <InputLabel title="Apellido Paterno" />
                </div>
                <div className="column">
                  <InputLabel title="Apellido Materno" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <InputLabel title="Matricula" />
                </div>
                <div className="column">
                  <DropDown
                    items={genderList}
                    title="Sexo"
                    hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                    name="gender"
                    valueSelect="id"
                    validationSchema={{
                      required: "Este campo es obligratorio",
                    }}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <DropDown
                    items={listCarrer}
                    title="Carrera"
                    hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                    name="gender"
                    valueSelect="id"
                    validationSchema={{
                      required: "Este campo es obligratorio",
                    }}
                  />
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}

        {showModal2 ? (
          /* Componente del Modal para agregar alumnos  */
          <ModalComponentGlobal
            title=""
            isActive=""
            hdlOnclick=""
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed=""
          >
            <div>
              <div
                className="columns container proyect-detail column359"
                //style={{ marginTop: "30px", width: "600px" }}
              >
                <div className="column">
                  <div className="column">
                    <InputLabel title="Nombre" />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Apellido Paterno" />
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <InputLabel title="Apellido Materno" />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Matricula" />
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <DropDown
                      items={genderList}
                      title="Sexo"
                      hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                      name="gender"
                      valueSelect="id"
                      validationSchema={{
                        required: "Este campo es obligratorio",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <DropDown
                      items={listCarrer}
                      title="Carrera"
                      hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                      name="gender"
                      valueSelect="id"
                      validationSchema={{
                        required: "Este campo es obligratorio",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}

        {showModal3 ? (
          //Diseño modal para agregar materiales
          <ModalComponentGlobal
            title=""
            isActive=""
            hdlOnclick=""
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed=""
          >
            <div>
              <div
                className="columns container proyect-detail column468"
                //style={{ marginTop: "10px", width: "600px" }}
              >
                <div className="column">
                  <div className="column">
                    <InputLabel title="Nombre del material" />
                  </div>
                </div>
              </div>
              <div className="column column468">
                <div className="column">
                  <div className="column">
                    <TextArea title="Descripción" />
                  </div>
                </div>
              </div>
              <div className="columns column484">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Cantidad" />
                  </div>
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}
        {/* Diseño de modales para editar las tablas DOCENTE ALUMNO y MATERIALES */}
        {showModalEdit ? (
          <ModalComponentGlobal
            title=""
            isActive=""
            hdlOnclick=""
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed=""
          >
            <div className="columns-margen">
              <div className="columns ">
                <div className="column">
                  <InputLabel title="Nombre" label="" type="text" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <InputLabel title="Apellido Paterno" />
                </div>
                <div className="column">
                  <InputLabel title="Apellido Materno" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <InputLabel title="Matricula" />
                </div>
                <div className="column">
                  <DropDown
                    items={genderList}
                    title="Sexo"
                    hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                    name="gender"
                    valueSelect="id"
                    validationSchema={{
                      required: "Este campo es obligratorio",
                    }}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <DropDown
                    items={listCarrer}
                    title="Carrera"
                    hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                    name="gender"
                    valueSelect="id"
                    validationSchema={{
                      required: "Este campo es obligratorio",
                    }}
                  />
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}

        {showModal2Edit ? (
          /* Componente del Modal para agregar alumnos  */
          <ModalComponentGlobal
            title=""
            isActive=""
            hdlOnclick=""
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed=""
          >
            <div>
              <div
                className="columns container proyect-detail column359"
                //style={{ marginTop: "30px", width: "600px" }}
              >
                <div className="column">
                  <div className="column">
                    <InputLabel title="Nombre" />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Apellido Paterno" />
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <InputLabel title="Apellido Materno" />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Matricula" />
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <DropDown
                      items={genderList}
                      title="Sexo"
                      hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                      name="gender"
                      valueSelect="id"
                      validationSchema={{
                        required: "Este campo es obligratorio",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="columns column367">
                <div className="column">
                  <div className="column">
                    <DropDown
                      items={listCarrer}
                      title="Carrera"
                      hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                      name="gender"
                      valueSelect="id"
                      validationSchema={{
                        required: "Este campo es obligratorio",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}

        {showModal3Edit ? (
          //Diseño modal para agregar materiales
          <ModalComponentGlobal
            title={getTitle()}
            isActive={showModal}
            hdlOnclick={handleModalOpen}
            titleGreen={getButtonText()}
            hdlOnClickGreen={handleAddClick}
            titleRed="Cancelar"
            hdlOnClickRed={handleModalOpen}
          >
            <div>
              <div
                className="columns container proyect-detail column468"
                //style={{ marginTop: "10px", width: "600px" }}
              >
                <div className="column">
                  <div className="column">
                    <InputLabel title="Nombre del material" />
                  </div>
                </div>
              </div>
              <div className="column column468">
                <div className="column">
                  <div className="column">
                    <TextArea title="Descripción" />
                  </div>
                </div>
              </div>
              <div className="columns column484">
                <div className="column">
                  <div className="column">
                    <InputLabel title="Cantidad" />
                  </div>
                </div>
              </div>
            </div>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}
      </>

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

        {/*diseño botones  de agregar y generar reporte*/}
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
              hdlOnClickEvent={() => setShowModal(!showModal)}
            />
          </div>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {docent ? (
                      docent.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id} </td>
                            <td>{item.name}</td>
                            <td>{item.first_name}</td>
                            <td>{item.second_name}</td>
                            <td>{item.matricula}</td>
                            <td>{item.gender}</td>
                            <td>{item.name_career}</td>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users ? (
                      users.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id_student} </td>
                            <td>{item.name}</td>
                            <td>{item.first_name}</td>
                            <td>{item.second_name}</td>
                            <td>{item.matricula}</td>
                            <td>{item.gender}</td>
                            <td>{item.name_career}</td>
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
            </CardComponent>
          </div>
        </>
      )}
      {selectedTab === 3 && (
        <>
          {/*diseño tabla Materiales  */}
          <div className="column is-12">
            <CardComponent classExtra="opacity-card card-proyects">
              <div>
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Descripcion">Descripcion.</th>
                      <th title="Cantidad">Cantidad.</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials ? (
                      materials.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td>{item.id_resurce}</td>
                            <td>{item.resource_name}</td>
                            <td>{item.observations}</td>
                            <td>{item.amount}</td>
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
            </CardComponent>
          </div>
          : <></>
        </>
      )}
    </div>
  );
};

export default Resources;
