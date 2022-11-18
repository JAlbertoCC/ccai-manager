import React from 'react';
import ButtonDecorative from './../components/ui/Buttons/ButtonDecorative'

const Home = () => {
  return (
    <div className='section'>
      <div className='columns' style={{ height: '70vh', width: '100%', marginTop: '2%' }}>
        <div className="column is-6" style= {{ margin: 'auto', textAlign: 'center' }}>
          <p className="cart-title">
            Centro de Cooperación Academica Industria
          </p>
          <p className="cart-title">
            CCAI
          </p>
          <p className='subtitle width-text'>
            Tecnológico de Estudios Superiores de Ecatepec
          </p>

        </div>
        <div className="column is-6" style= {{ margin: 'auto', width: '50%' }}>
          <div className='columns'>
            <div className='column is-6'>
              <ButtonDecorative
                title="Proyecto"
                backgroundColor="#db6949"
                icon="lightbulb-variant-outline "
              />
            </div>
            <div className='column is-6'>
              <ButtonDecorative
                title="Articulos"
                backgroundColor="#f3d13e"
                icon="file-document "
              />
            </div>
            <div className='column is-6'>
              <ButtonDecorative
                title="Recursos"
                backgroundColor="#646463"
                icon="calendar-text "
              />
            </div>
            <div className='column is-6'>
              <ButtonDecorative
                title="Expediente"
                backgroundColor="#d5b61b"
                icon="folder"
              />
            </div>
            <div className='column is-6'>
              <ButtonDecorative
                title="Calendario CCAI"
                backgroundColor="#3ea56a"
                icon="calendar-multiselect-outline "
              />
            </div>
            <div className='column is-6'>
              <ButtonDecorative
                title="Información"
                backgroundColor="#646463"
                icon="magnify "
              />
            </div>
            <div className='column is-6' style={{ margin: 'auto' }}>
              <ButtonDecorative
                title="Cerrar sesión"
                backgroundColor="#c12529"
                icon="power-standby "
              />
            </div>
          </div>
        </div>
      </div>       
    </div>
    
  )
}

export default Home
