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
import { useForm } from "react-hook-form";

const Resources = () => {
  //HOOK para llamar los datos de la appi ya agruparlos
  const [users, setUsers] = useState([]);
  const { consultingStudentsData } = useStudents();
  const [materials, setMaterials] = useState([]);
  const { consultMaterials } = useMaterials();
  const [docent, setDocent] = useState([]);
  const { consultTeacher } = useDocent();
  const { insertResources } = useMaterials();
  const { deleteMaterials } = useMaterials();
  const { editaMateriales, consultarMaterials } = useMaterials();
  const [dataEdit, setDataEdit] = useState({
    id_resource: "",
  });
  const [materialEdit, setMarialEdit] = useState([]);

  useEffect(() => {
    showData();
    showDataMaterials();
    showDocent();
    dataEditMaterial();
  }, [setDataEdit.id_resource]);

  const showData = async () => {
    consultingStudentsData()
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const showDataMaterials = async () => {
    consultMaterials()
      .then((result) => {
        setMaterials(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const showDocent = async () => {
    consultTeacher()
      .then((result) => {
        setDocent(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Función para mostrar la información con el ID
  const dataEditMaterial = async () => {
    consultarMaterials(setDataEdit.id_resource)
      .then((result) => {
        setMarialEdit(result);
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

  const [TypeInputGender, setTypeInputGender] = useState();

  // Configuración para el form (hooks) (uso de props)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  //hook para registro de materiales
  const [formDataMaterials, setFormDataMaterials] = useState({
    resoruce_name: "",
    observation: "",
    amount: "",
    status: "A",
    description: "",
  });

  // Regresa y actualiza los valores de la variable y la información
  const handleFormChange = (name, value) => {
    setFormDataMaterials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Se crea el objeto con los datos que se enviaran al realizar el registro del material
  const insertResource = () => {
    const body = {
      resoruce_name: formDataMaterials.resoruce_name,
      observation: formDataMaterials.observation,
      amount: formDataMaterials.amount,
      status: formDataMaterials.status,
      description: formDataMaterials.description,
    };
    // Regresa las alertas o valida los registros o errores
    if (isDirty && isValid) insertNewResources(body);
    console.log(body);
  };

  //Se registra el nuevo material
  const insertNewResources = (body) => {
    insertResources(body)
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  //Se crea el objeto con el ID que se enviará
  const deleteMaterial = (id_resource) => {
    const body = {
      id_resource: id_resource,
    };
    // Regresa las alertas o valida registros
    if (isDirty && isValid) deleteNewMaterial(body);
    console.log(body);
  };

  //Se elimina el material
  const deleteNewMaterial = (body) => {
    deleteMaterials(body)
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  //Configuración para el form de editar
  const [formEditMaterial, setFormEditMaterial] = useState({
    resoruce_name: "",
    observation: "",
    amount: "",
    description: "",
  });

  // Regresa y actualiza los valores de la variable y la información
  const handleUpdate = (name, value) => {
    setFormEditMaterial((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Se crea el objeto con los datos a modificar
  const editMaterial = () => {
    const body = {
      //id_resource: formEditMaterial.id_resource,
      resoruce_name: formEditMaterial.resoruce_name,
      observation: formEditMaterial.observation,
      amount: formEditMaterial.amount,
      description: formEditMaterial.description,
    };
    if (isDirty && isValid) editNewMaterial(body);
    console.log(body);
  };

  //Se edita el material deseado
  const editNewMaterial = (body) => {
    editaMateriales(body)
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  //Inicio del formulario
  return (
    <div className="section">
      {/* Diseño de modales para agregar datos a las tablas DOCENTE ALUMNO Y MATERIAL */}
      <>
        {/* Componente del Modal  para agregar docentes */}
        {showModal ? (
          <ModalComponentGlobal
            title="Agregar Nuevo Docente"
            isActive={showModal}
            hdlOnclick={() => setShowModal(!showModal)}
            titleGreen="Agregar"
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModal(!showModal)}
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
            title="Agregar Nuevos Alumnos"
            isActive={showModal2}
            hdlOnclick={() => setShowModal2(!showModal2)}
            titleGreen="Agregar"
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModal2(!showModal2)}
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
          //Diseño modal para agregar materiales. Se crea otro formulario para insertar el material
          <ModalComponentGlobal
            title="Agregar Nuevo Material"
            isActive={showModal3}
            hdlOnclick={() => setShowModal3(!showModal3)}
            titleGreen="Agregar"
            hdlOnClickGreen={() => insertResource()}
            //
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModal3(!showModal3)}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <div
                  className="columns container proyect-detail column468"
                  //style={{ marginTop: "10px", width: "600px" }}
                >
                  <div className="column">
                    <div className="column">
                      <InputLabel
                        title="Nombre del material"
                        name="resoruce_name"
                        hdlOnChange={(e) =>
                          handleFormChange("resoruce_name", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column column468">
                  <div className="column">
                    <div className="column">
                      <TextArea
                        title="Descripción"
                        name="description"
                        hdlOnChange={(e) =>
                          handleFormChange("description", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column column468">
                  <div className="column">
                    <div className="column">
                      <TextArea
                        title="Observaciones"
                        name="observation"
                        hdlOnChange={(e) =>
                          handleFormChange("observation", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <InputLabel
                      title="Cantidad"
                      name="amount"
                      hdlOnChange={(e) =>
                        handleFormChange("amount", e.target.value)
                      }
                      register={register}
                    />
                  </div>
                </div>
              </div>
            </form>
          </ModalComponentGlobal>
        ) : (
          <></>
        )}
        {/* Diseño de modales para editar las tablas DOCENTE ALUMNO y MATERIALES */}
        {showModalEdit ? (
          /* Diseño de modal para editar Docentes */
          <ModalComponentGlobal
            title="Editar Docente"
            isActive={showModalEdit}
            hdlOnclick={() => setShowModalEdit(!showModalEdit)}
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModalEdit(!showModalEdit)}
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
            title="Editar Alumno"
            isActive={showModal2Edit}
            hdlOnclick={() => setShowModal2Edit(!showModal2Edit)}
            titleGreen=""
            hdlOnClickGreen=""
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModal2Edit(!showModal2Edit)}
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
          //Diseño modal para Editar materiales
          <ModalComponentGlobal
            title="Editar Material"
            isActive={showModal3Edit}
            hdlOnclick={() => setShowModal3Edit(!showModal3Edit)}
            titleGreen="Editar"
            hdlOnClickGreen={() => editMaterial()}
            titleRed="Cancelar"
            hdlOnClickRed={() => setShowModal3Edit(!showModal3Edit)}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <div
                  className="columns container proyect-detail column468"
                  //style={{ marginTop: "10px", width: "600px" }}
                >
                  <div className="column">
                    <div className="column">
                      <InputLabel
                        title="Nombre del material"
                        name="resoruce_name"
                        value={dataEdit.resoruce_name}
                        hdlOnChange={(e) =>
                          handleUpdate("resoruce_name", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column column468">
                  <div className="column">
                    <div className="column">
                      <TextArea
                        title="Descripción"
                        name="description"
                        hdlOnChange={(e) =>
                          handleUpdate("description", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column column468">
                  <div className="column">
                    <div className="column">
                      <TextArea
                        title="Observaciones"
                        name="observation"
                        hdlOnChange={(e) =>
                          handleUpdate("observation", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="columns column484">
                  <div className="column">
                    <div className="column">
                      <InputLabel
                        title="Cantidad"
                        name="amount"
                        hdlOnChange={(e) =>
                          handleUpdate("amount", e.target.value)
                        }
                        register={register}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
      </div>

      {selectedTab === 1 && (
        <>
          {/*diseño botones  de agregar y generar reporte Maestros */}
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
                            <td>{item.id_adviser} </td>
                            <td>{item.name_adviser}</td>
                            <td>{item.first_name}</td>
                            <td>{item.second_name}</td>
                            <td>{item.matricula}</td>
                            <td>{item.gender}</td>
                            <td>{item.division}</td>
                            <td>
                              <i
                                className="mdi mdi-pencil icon-blue"
                                onClick={() => setShowModalEdit(!showModalEdit)}
                              ></i>
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
                hdlOnClickEvent={() => setShowModal2(!showModal2)}
              />
            </div>
          </div>
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
                              <i
                                className="mdi mdi-pencil icon-blue"
                                onClick={() =>
                                  setShowModal2Edit(!showModal2Edit)
                                }
                              ></i>
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
                hdlOnClickEvent={() => setShowModal3(!showModal3)}
              />
            </div>
          </div>
          {/*diseño tabla Materiales  */}
          <div className="column is-12">
            <CardComponent classExtra="opacity-card card-proyects">
              <div>
                <table className="table table-proyect is-fullwidth is-striped">
                  <thead>
                    <tr>
                      <th title="ID">ID.</th>
                      <th title="Nombre">Nombre.</th>
                      <th title="Descripción">Descripción.</th>
                      <th title="Observaciones">Observaciones.</th>
                      <th title="Cantidad">Cantidad.</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials ? (
                      materials.map((item, index) => {
                        //console.log(item);
                        return (
                          <tr key={index}>
                            <td>{item.id_resource}</td>
                            <td>{item.resoruce_name}</td>
                            <td>{item.description}</td>
                            <td>{item.observation}</td>
                            <td>{item.amount}</td>
                            <td>
                              <i
                                className="mdi mdi-pencil icon-blue"
                                onClick={() =>
                                  setShowModal3Edit(!showModal3Edit) &&
                                  setDataEdit(item.id_resource)
                                }
                              ></i>
                              <i
                                className="mdi mdi-trash-can-outline icon-blue"
                                onClick={() => deleteMaterial(item.id_resource)}
                              ></i>
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
