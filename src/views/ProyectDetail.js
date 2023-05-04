import React, { useState } from 'react';
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { AccordeonComponent } from './../components/commond/AccordeonComponent'

const ProyectDetail = () => {
  const [showProyectInformation, setShowProyectInformation] = useState(false);
  const [showMembersInformation, setShowMembersInformation] = useState(false);
  const [showMaterialsInformation, setShowMaterialsInformation] = useState(false);
  const [showAdviserInformation, setShowAdviserInformation] = useState(false);

  return (
    <div className='section'>
      <div className="columns" style={{ width: '100%' }}>
        <div className="column is-12">
          <HeaderComponent title="Proyecto 3: Gestor del ccai" />
        </div>

        <div className='column is-12'>
          <CardComponent classExtra="opacity-card card-proyects">

            {/* Collapsive */}
            <AccordeonComponent
              title='Información del proyecto.'
              hdlOnShowContent={() => setShowProyectInformation(!showProyectInformation)}
              isActive={showProyectInformation}
              iconTitle='mdi-text-box-search-outline'
            >
              Información de proyecto
            </AccordeonComponent>

            <AccordeonComponent
              title='Integrantes.'
              hdlOnShowContent={() => setShowMembersInformation(!showMembersInformation)}
              isActive={showMembersInformation}
              iconTitle='mdi-account-group'
            >
              Integrantes de proyecto
            </AccordeonComponent>

            <AccordeonComponent
              title='Materiales.'
              hdlOnShowContent={() => setShowMaterialsInformation(!showMaterialsInformation)}
              isActive={showMaterialsInformation}
              iconTitle='mdi-palette-swatch'
            >
              Materiales
            </AccordeonComponent>

            <AccordeonComponent
              title='Asesores.'
              hdlOnShowContent={() => setShowAdviserInformation(!showAdviserInformation)}
              isActive={showAdviserInformation}
              iconTitle='mdi-account-group-outline'
            >
              Asesores
            </AccordeonComponent>

          </CardComponent>
        </div>
      </div>
    </div>
  )
}

export default ProyectDetail
