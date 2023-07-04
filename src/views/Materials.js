import React, { useState,useEffect } from "react";

import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { SerchComponet } from "./../components/ui/Inputs/SerchComponent";
import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { ButtonIcon } from "./../components/ui/Buttons/ButtonIcon";
import { MaterialList } from "./../components/Materials/tables/MaterialList";
import { BorrowedMaterialsList } from "./../components/Materials/tables/BorrowedMaterialsList";
import { useMaterials } from "../hooks/useMaterials";



const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const { consultMaterials } = useMaterials();

  useEffect(() => {
    
    showMaterial();
  }, []);

  const showMaterial = async () => {
    consultMaterials()
      .then((result) => {
        const newArray =
          result.map((item, index) => {
            return {
              id: item.id_resurce,
              name: item.resource_name,
              description: item.observations,
              count: item.amount
            };
          });
          setMaterials(newArray);
          console.log("result", result);
        })
        .catch((error) => {
          console.error(error);
        });
    };


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



        // setMaterials(newArray)
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
