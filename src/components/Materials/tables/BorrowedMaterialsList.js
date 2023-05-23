import React from "react";

export const BorrowedMaterialsList = (props) => {
  const { list = [], hdlOnClick = () => {  } } = props;

  return (
    <table className="table table-materials is-fullwidth is-striped">
      <thead>
        <tr>
          <th title="ID">ID.</th>
          <th title="Nombre">Nombre.</th>
          <th title="Descripción">Descripción.</th>
          <th title="Cantidad">Cantidad.</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={`borrowed-${index}`}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.description}</td>
              <td>
                <i
                className="mdi mdi-plus-circle icon-blue cursor icon-table"
                onClick={() => {}}
                />
                <span className="text-circles">{item.count}</span>
                <i
                  className="mdi mdi-minus-circle icon-blue cursor icon-table"
                  onClick={() => {}}
                />
              </td>
              <td>
                <i
                  className="mdi mdi-trash-can-outline icon-blue cursor"
                  onClick={() => {}}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
