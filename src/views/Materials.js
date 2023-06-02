import React, { useState } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { SerchComponet } from "./../components/ui/Inputs/SerchComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { MaterialList } from "./../components/Materials/tables/MaterialList";
import { BorrowedMaterialsList } from "./../components/Materials/tables/BorrowedMaterialsList";

const Materials = () => {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "Computadora",
      description: "Computadora gamer, con 1 tera de RAM, teclado con luz, etc",
      count: 12,
    },
    {
      id: 2,
      name: "Arduino",
      description: "arduiono 1",
      count: 10,
    },
    {
      id: 3,
      name: "Impresora 3D",
      description: "Impresora 3d",
      count: 22,
    },
    {
      id: 4,
      name: "Teclado",
      description: "teclado logitech",
      count: 12,
    },
    {
      id: 5,
      name: "Ejemplo 12",
      description: "Ejemplo 12",
      count: 12,
    },
  ]);
  const [borrowedMaterials, setBorrowedMaterials] = useState([]);

  const setNewMaterials = (id) => {
    const findOldValue = materials.find(e => e.id === id);
    
    if (findOldValue) {
      console.log('findOldValue: ', findOldValue)
      console.log('findOldValue: ', findOldValue)

      if (findOldValue.count > 0) {
        const newArray = materials.map(item => {
          console.log('item.id === id: ', item.id === id)
          console.log('id: ', id)
          console.log('item.id: ', item.id)
          if (item.id === id) {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              count: 1
            }
          } else 
            return item
        })



        setMaterials(newArray)
      }

      
      // setBorrowedMaterials(prev => [{...prev, ...findOldValue }])
    } else {
      const value = materials.find(e => e.id === id);
      // setBorrowedMaterials(prev =>[{ ...prev, ...value}])
    }
  }

  return (
    <div className="section">
      <HeaderComponent title="Materiales" />
      <SerchComponet extraClass="SerchComponet-materials">Buscar</SerchComponet>

      <CardComponent classExtra="opacity-card card-materials">
        <MaterialList
          list={materials}
          hdlOnClick={setNewMaterials}
        />
      </CardComponent>

      {borrowedMaterials.length > 0 ?
       <>
          <p className="title-materials">Material solicitado</p>

          <CardComponent classExtra="opacity-card card-materials">
           <BorrowedMaterialsList
             list={borrowedMaterials}
           />
          </CardComponent>
          <ButtonIcon
           title="Solicitar material"
           icon="file-download-outline"
           extraClass="aling-right margin-right button-tables"
          />
        </> : <></>
      }
      
    </div>
  );
};
export default Materials;
