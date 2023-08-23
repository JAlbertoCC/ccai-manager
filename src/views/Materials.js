import React, { useState } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { SerchComponet } from "./../components/ui/Inputs/SerchComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";

const Materials = () => {
  //funcion mostrar u ocultar segunda tabla
  const [showSecondTable, setShowSecondTable] = useState();
  //funcion de evento onClick para mostrar tabla al dar click en el componente mdi
  const handlePlusClick = () => {
    setShowSecondTable(!showSecondTable);
  };

  // FUNCION CONTADOR DECLARADO
  const [count, setCount] = useState(5);
  //AUMENTA EL CONTADOR MAS 1
  const incrementCounter = () => {
    setCount(count + 1);
  };
  //DISMINULLE EL CONADOR MENOS 1
  const decrementsCounter = () => {
    setCount(count - 1);
  };

  //DATOS DE PRUEBA PARA TABLA MATERIALES
  const [dataMaterial, setDataMaterial] = useState([
    {
      ID: 1,
      NAME: "COSA 1",
      DESCRIPCION: "DESCRIPCION DE COSA 1",
      CANTIDAD: 10,
    },
    {
      ID: 2,
      NAME: "COSA 2",
      DESCRIPCION: "DESCRIPCION DE COSA 2",
      CANTIDAD: 20,
    },
    {
      ID: 3,
      NAME: "COSA 3",
      DESCRIPCION: "DESCRIPCION DE COSA 3",
      CANTIDAD: 30,
    },
    {
      ID: 4,
      NAME: "COSA 4",
      DESCRIPCION: "DESCRIPCION DE COSA 4",
      CANTIDAD: 0,
    },
  ]);
  // DATOS DE PRUEBA PARA TABLA DE MATERIALES PRESTADOS
  const [dataMaterialSolicitado, setDataMaterialSolicitado] = useState([
    {
      ID: 1,
      NAME: "COSA 1",
      DATEeNTREGA: "12-12-12",
      DATEdEVOLUCION: "13-13-13",
      RESPONSABLE: "PEPE PICAS",
      CANTIDAD: 0,
    },
    {
      ID: 2,
      NAME: "COSA 2",
      DATEeNTREGA: "12-12-12",
      DATEdEVOLUCION: "13-13-13",
      RESPONSABLE: "PEPE PECAS",
      CANTIDAD: 0,
    },
  ]);

  return (
    <div className="section">
      <HeaderComponent title="Materiales" />
      <SerchComponet extraClass="SerchComponet-materials">Buscar</SerchComponet>
      <CardComponent classExtra="opacity-card card-materials">
        <table className="table table-materials is-fullwidth">
          <thead>
            <tr>
              <th title="ID">ID.</th>
              <th title="Nombre">Nombre.</th>
              <th title="Descripción">Descripción.</th>
              <th title="Cantidad">Cantidad.</th>
              <th title="Agregar">Agregar.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataMaterial.map((item) => (
              <tr key={item.ID}>
                <td title="ID">{item.ID}</td>
                <td title="Nombre">{item.NAME}</td>
                <td title="Descripción">{item.DESCRIPCION}</td>
                <td title="Cantidad">{item.CANTIDAD}</td>
                <td>
                  <i
                    className="mdi mdi-plus-circle icon-blue"
                    onClick={handlePlusClick}
                  ></i>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardComponent>

      <div className="section">
        <p className="title-materials">Material solicitado</p>
      </div>

      <CardComponent classExtra="opacity-card card-materials">
        <table className="table table-materials is-fullwidth ">
          <thead>
            <tr>
              <th title="ID">ID.</th>
              <th title="Nombre">Nombre.</th>
              <th title="Fecha entrega">Fecha entrega.</th>
              <th title="Fecha devolución">Fecha devolución.</th>
              <th title="Responsable de material">Responsable de material.</th>
              <th title="Cantidad" onClick={count}>
                Cantidad.
              </th>
              <th title="Eliminar"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataMaterialSolicitado.map((item) => (
              <tr key={item.ID}>
                <td title="ID">{item.ID}</td>
                <td title="Nombre">{item.NAME}</td>
                <td title="Fecha entrega">{item.DATEeNTREGA}</td>
                <td title="Fecha delovolución">{item.DATEdEVOLUCION}</td>
                <td title="Responsable de material">{item.RESPONSABLE}</td>
                <td>
                  {/* boton menos */}
                  <i
                    className="mdi mdi-minus-circle icon-blue"
                    onClick={decrementsCounter}
                  >
                    {" "}
                  </i>
                  <i className="mdi mdi-remove-circle icon-blue"></i>
                  {item.CANTIDAD}
                  {/* boton mas */}
                  <i
                    className="mdi mdi-plus-circle icon-blue"
                    onClick={incrementCounter}
                  ></i>
                  <i className="mdi mdi-remove-circle icon-blue"></i>
                </td>
                <td title="Eliminar">
                  {/* boton/icon basurero */}
                  <i className="mdi mdi-trash-can-outline icon-blue"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardComponent>
    </div>
  );
};
export default Materials;
