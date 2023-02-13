import React, { useState } from 'react';
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { AccordeonComponent } from './../components/commond/AccordeonComponent'

const ProyectDetail = () => {
  const { showInformation, setShowInformation } = useState(false)

  const showAccordeon = () => {
    console.log('hola')
  }

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
              hdlOnShowContent={showAccordeon()}
              isActive={showInformation}
              iconTitle='mdi-text-box-search-outline'
            >
              Hola
            </AccordeonComponent>

            <AccordeonComponent
              hdlOnShowContent={showAccordeon()}
              isActive={showInformation}
            >
              Hola

              Hola mundo este es mi acrodeon
            </AccordeonComponent>

          </CardComponent>
        </div>
      </div>
    </div>
  )
}

export default ProyectDetail
