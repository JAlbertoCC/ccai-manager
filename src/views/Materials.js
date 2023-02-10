import React from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { SerchComponet } from './../components/ui/Inputs/SerchComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'


const Materials = () => {
    return(

       <div className='section'>
            <HeaderComponent title="Materiales"/> 
            <SerchComponet extraClass='SerchComponet-materials'>Buscar</SerchComponet>
            <CardComponent classExtra="opacity-card card-materials">
                <table className="table table-materials is-fullwidth is-striped">
                    <thead>
                        <tr >
                            <th title="ID">ID.</th>
                            <th title="Nombre">Nombre.</th>
                            <th title="Descripción">Descripción.</th>
                            <th title="Cantidad">Cantidad.</th>
                            <th title="Agregar">Agregar.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="Descripción">Descripción.</td>
                            <td title="Cantidad">Cantidad.</td>
                            <td><i className='mdi mdi-plus-circle icon-blue'></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td>Nombre.</td>
                            <td title="Descripción">Descripción.</td>
                            <td title="Cantidad">Cantidad.</td>
                            <td><i className='mdi mdi-plus-circle icon-blue'></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td>Nombre.</td>
                            <td title="Descripción">Descripción.</td>
                            <td title="Cantidad">Cantidad.</td>
                            <td><i className='mdi mdi-plus-circle icon-blue'></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td>Nombre.</td>
                            <td title="Descripción">Descripción.</td>
                            <td title="Cantidad">Cantidad.</td>
                            <td><i className='mdi mdi-plus-circle icon-blue'></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </CardComponent>
            <p className='teaxt-aling'>Material Solicitato</p>
            <CardComponent classExtra="opacity-card card-materials">
            <table className="table table-materials is-fullwidth is-striped">
                    <thead>
                        <tr >
                            <th title="ID">ID.</th>
                            <th title="Nombre">Nombre.</th>
                            <th title="Fecha entrega">Fecha entrega.</th>
                            <th title="Fecha devolución">Fecha devolución.</th>
                            <th title="Responsable de material">Responsable de material.</th>
                            <th title="Cantidad">Cantidad.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="Fecha entrega">Entrega.</td>
                            <td title="Fecha delovolución">Devolución.</td>
                            <td title="Responsable de material">Responsable.</td>
                            <td>
                                <i className='mdi mdi-plus-circle icon-blue'></i>
                                <i className='mdi mdi-subtraction-circle icon-blue'></i>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td title="ID">ID.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="Fecha entrega">Entrega.</td>
                            <td title="Fecha delovolución">Devolución.</td>
                            <td title="Responsable de material">Responsable.</td>
                            <td>
                                <i className='mdi mdi-plus-circle icon-blue'></i>
                                <i className='mdi mdi-subtraction-circle icon-blue'></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CardComponent>
            <ButtonIcon 
                title="Solicitar material"
                icon="file-download-outline"
                extraClass="aling-right margin-right button-tables"
            />
       </div> 
    )
}
export default Materials