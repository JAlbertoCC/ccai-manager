import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { useNavigate, useParams  } from "react-router-dom";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";
import { InputLabel } from "../components/ui/Inputs/InputLabel";
import { TextArea } from "../components/ui/Inputs/TextArea";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiPlusBoxOutline } from "@mdi/js";
import { useProjects } from "../hooks/useProjects";


const Proyects = () => {
//cambio 1
const [projects, setProjects] = useState([]);

const { consultProjects } = useProjects();

useEffect ( () =>{
  showData();
}, [])

const showData = async() =>{
  consultProjects().then(result => {
       setProjects(result)      
  }).catch(error => {
        console.error(error); 
 }); 
}
//parametros para navegar a la vista proyect-detail / id_proyect junto al id que se seleccione 
  const navigate = useNavigate();
  const goToLink = (uri, projectId) => {
    navigate(`${uri}/${projectId}`);
  };
  
  
  
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(!showModal);
  };

  const handleAddClick = () => {
    setShowModal(false);
  }

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
          hdlOnclick={handleModalOpen}
          hdlOnClickRed={handleModalOpen}
          
        >
          <div class="columns-project" style={{ marginTop: "30px" }}>
            <div class="column">
              <InputLabel title="Nombre del proyecto" label="" type="text" />
            </div>
          </div>

          <div class="columns" style={{ marginTop: "30px", width: "600px" }}>
            <div class="column">
              <TextArea title="Justificación del proyecto" type="text" />
            </div>

            <div class="column">
              <TextArea
                title="Beneficios del proyecto"
                label=""
                type="text"
              ></TextArea>
            </div>
          </div>
          <div class="column">
            <InputLabel title="Objetivo general" label="" type="text" />
          </div>
          <div className="column is-4">
            <p className="title-objectives is-left">Objetivos Específicos</p>
          </div>
          <div class="columns">
            <div class="column is-6">
              <InputLabel label="" type="text" />
            </div>
            <div class="column is-one-fifth" style={{ marginTop: "10px" }}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="icon-plus">
                  <Icon
                    path={mdiPlus}
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
              <InputLabel type="text" />
            </div>
            <div class="column is-one-fifth" style={{ marginRight: "20px" }}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="icon-minus">
                  <Icon path={mdiMinus} size={1} color="red" />
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
        <ButtonIcon
          style={{ width: "130px", marginTop: "10px" }}
          class="ButtonIcon"
          title="Agregar proyecto"
          icon="plus-circle"
          className="button button-new-project"
          extraClass="aling-right"
          hdlOnClickEvent = {() => setShowModal(!showModal)}
        >
          <span className="icon is-right">
            <Icon path={mdiPlusBoxOutline} size={1} />
          </span>
        </ButtonIcon>
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
              { projects ? projects.map((item, index) =>{
                        console.log(item);
                        return(
                  <tr key={index}>
                        <td>{item.id_proyect}</td>
                        <td>{item.proyect_name}</td>
                        <td>{item.objective}</td>
                        <td>{item.benefit}</td>
                        <td>{item.name_adviser}</td>
                        <td>Lista de actividades.</td>
                  <td>
                    <i
                      className="mdi mdi-eye icon-blue"
                      onClick={() => goToLink("/proyect-detail", item.id_proyect)}
                    ></i>
                    <i className="mdi mdi-trash-can-outline icon-blue"></i>
                  </td>
                </tr>
                )
              }) :<></>}
              </tbody>
            </table>
          </div>
        </CardComponent>
      
      </div>
    </div>
  );
};

export default Proyects;