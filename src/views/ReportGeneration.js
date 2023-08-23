import React, { useState } from "react";
import { HeaderComponent } from "../components/ui/Header/HeaderComponent";
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { ButtonIcon } from "../components/ui/Buttons/ButtonIcon";
import { TextArea } from "../components/ui/Inputs/TextArea";
import { AccordeonComponent } from "../components/commond/AccordeonComponent";
import { ButtonComponent } from "../components/ui/Buttons/PrimaryButton";

const ReportGeneration = () => {
   const [showInformation, setShowInformation] = useState(false);

    return (
        <div className="container register-content">
            <HeaderComponent title= 'Generar Reporte'/>
            <div className="column is-12">
                <div>
                <ButtonIcon
                title="Editar"
                icon="file-edit-outline"
                className="button button-new-project"
                extraClass="aling-right"
            />
             </div>
            </div>
            <CardComponent  classExtra="opacity-card card-proyects">
                 <div className="columns container-personal">
                 <div className="column is-6">
                    <TextArea
                      title="Descripción"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Justificación"
                    />
                 </div>
                 <div className="column is-10">
                  <p className="title-register">OBJETIVOS</p>
                 </div>
                 <div className="column is-4">
                  <TextArea
                     title= "Objetivo"
                     />
                 </div>
                 <div className="column is-4">
                  <TextArea
                     title= "Objetivo General"
                     />
                 </div>
                 <div className="column is-4">
                  <TextArea
                     title= "Objetivo Específico"
                     />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Beneficio"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Resumen"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Introducción"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Metas"
                    />
                 </div>
                 <div className="column is-12">
                    <TextArea
                      title="Marco Teórico"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Impacto o beneficio en la solución a un 
                      problema relacionado con el sector productivo 
                      o la generación del conocimiento científico o 
                      tecnológico"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Metodología"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Vinculación con el sector productivo"
                    />
                 </div>
                 <div className="column is-6">
                    <TextArea
                      title="Referencia"
                    />
                 </div>
            </div>
            <AccordeonComponent
            title="Programa de actividades, calendarización y presupuesto solicitado"
            hdlOnShowContent={() =>
               setShowInformation(!showInformation)
             }
             isActive={showInformation}
            >
               <div>
                  <table className="table table-proyect is-fullwidth is-striped">
                     <thead>
                        <tr>
                          <th title="ID">ID</th>
                          <th title="Actividad">Actividad</th>
                          <th title="Entregables">Entregables</th>
                          <th title="Periodo de realización">Periodo de realización</th>
                          <th title="Monto solicitado">Monto solicitado</th>
                        </tr>
                     </thead>
                     <tbody>
                     <tr>
                          <td title="ID">ID</td>
                          <td title="Actividad">Actividad</td>
                          <td title="Entregables">Entregables</td>
                          <td title="Periodo de realización">Periodo de realización</td>
                          <td title="Monto solicitado">Monto solicitado</td>
                          <td>
                           <i className="mdi mdi-pencil icon-blue"></i>
                           <i className="mdi mdi-trash-can-outline icon-blue"></i>
                          </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </AccordeonComponent>
            <div className="buttons-content">
               <ButtonComponent
                 buttonText="Generar Reporte"
               />
            </div>
            </CardComponent>    
        </div>
    )
  
}
export default ReportGeneration