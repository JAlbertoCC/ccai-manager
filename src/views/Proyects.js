import React, { useEffect } from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'
import { CardComponent } from './../components/ui/Cards/CardComponent'

const Proyects = () => {

  useEffect(() => {
  }, [])

  return (
    <div className='section'>
      <HeaderComponent title="Proyectos"/> 
      <div className="column is-12">
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
        <div className="column is-12">
                <CardComponent classExtra="opacity-card card-proyects">             
                        <div>
                            <table className="table table-proyect is-fullwidth is-striped">
                                <thead>
                                    <tr >
                                        <th title="ID">ID.</th>
                                        <th>Nombre del proyecto.</th>
                                        <th title="Objetivo">Objetivo.</th>
                                        <th title="Beneficios">Beneficios.</th>
                                        <th title="Asesores">Asesores.</th>
                                        <th title="Cronograma de actividades">Cronograma de actividades.</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td title="ID">ID.</td>
                                        <td>Nombre del proyecto.</td>
                                        <td title="Objetivo">Objetivo.</td>
                                        <td title="Beneficios">Beneficios.</td>
                                        <td title="Asesores">Asesores.</td>
                                        <td title="Cronograma de actividades">Cronograma de actividades.</td>
                                        <td><i className='mdi mdi-eye icon-blue'></i><i className='mdi mdi-trash-can-outline icon-blue'></i></td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                </CardComponent>
      </div>
    </div>
  )
}
export default Proyects
