import React from "react";

export const MaterialList = (props) => {
  const { list = [], hdlOnClick = () => {  } } = props;

  return (
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
        {list.map((item, index) => {
          return (
            <tr key={`materials-${index}`}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.description}</td>
              <td className="text-center">{item.count}</td>
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
