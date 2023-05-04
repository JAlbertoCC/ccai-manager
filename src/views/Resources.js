import React, { useState, useEffect } from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { TabsComponent } from './../components/commond/Tabs'
import { TableComponent } from './../components/commond/Table'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'
import { CardComponent } from './../components/ui/Cards/CardComponent'



const Resources = () => {
  const [tabs,setTabs] = useState([{
    id: 1,
    tabName: "Docentes"
  },
  {
    id: 2,
    tabName: "Alumnos"
  },
  {
    id: 3,
    tabName: "Materiales"
  }]);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
  }, [])
  
  return (
    <div className='section'>
      <div className="columns" style={{ width: '100%' }}>
        <div className="column is-12" >
          <HeaderComponent title="Recursos" />
        </div>
        <div className="column is-12">
          <TabsComponent tabs={tabs} onChangeTab={setSelectedTab} selectedTab={selectedTab}/>
        </div>
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
            />
          </div>
        </div>
        <div className="column is-12">
          <CardComponent classExtra="opacity-card card-proyects">
            <TableComponent />
          </CardComponent>
        </div>
      </div>
    </div>
  )
}

export default Resources