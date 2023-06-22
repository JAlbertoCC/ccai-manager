import React from "react";

export const ProjectList = (props) => {
  const { list = [], hdlOnClick = () => {  } } = props;

  return (
    <table className="table table-proyects is-fullwidth">
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
        {list.map((item, index) => {
          return (
            <tr key={`materials-${index}`}>
              <td className="text-center">{item.id_proyect}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.objective}</td>
              <td className="text-center">{item.benefit}</td>
              <td className="text-center">{item.name_adviser}</td>
              <td className="text-center">{item.schedules}</td>
              <td className="text-center">
                <i
                  className="mdi mdi-plus-circle icon-blue cursor"
                  onClick={() => hdlOnClick(item.id)}
                />
              </td>
            </tr>    
          )
        })}
      </tbody>
    </table>
  );
};