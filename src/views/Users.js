import React, { useState } from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { ModalComponent } from './../components/ui/Modal/ModalComponent';

const Users = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='section'>
    
            <HeaderComponent title='Usuarios Registrados'/>
            
            { showModal ? 
                <ModalComponent
                    classExtra = "modal-users" 
                    title = "Información de usuario" 
                    isActive = "false" 
                    hdlOnclick= { ()=>setShowModal (!showModal)} >
                </ModalComponent> : <></>
            }            
            <CardComponent classExtra="opacity-card card-users">
           
                <table className="table table-users is-fullwidth is-striped">
                <thead>
                    <tr >
                        <th title="Matricula">Matricula.</th>
                        <th title="Nombre">Nombre.</th>
                        <th title="App">Apellido Paterno.</th>
                        <th title="Apm">Apellido Materno.</th>
                        <th title="Carrera">Carrera.</th>
                        <th title="Servicio a prestar">Servicio a prestar.</th>
                        <th title="Periodo">Periodo.</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td title="Matricula">Matricula.</td>
                        <td title="Nombre">Nombre.</td>
                        <td title="App">Apellido Paterno.</td>
                        <td title="Apm">Apellido Materno.</td>
                        <td title="Carrera">Carrera.</td>
                        <td title="Servicio a prestar">Servicio a prestar.</td>
                        <td title="Periodo">Periodo.</td>
                        <td><i className='mdi mdi-eye icon-blue' onClick={()=>setShowModal(!showModal)}></i></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                            <td title="Matricula">Matricula.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="App">Apellido Paterno.</td>
                            <td title="Apm">Apellido Materno.</td>
                            <td title="Carrera">Carrera.</td>
                            <td title="Servicio a prestar">Servicio a prestar.</td>
                            <td title="Periodo">Periodo.</td>
                            <td><i className='mdi mdi-eye icon-blue' onClick={()=>setShowModal(!showModal)}></i></td>
                            <td></td>
                    </tr>
                </tbody>
                    <tbody>
                        <tr>
                            <td title="Matricula">Matricula.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="App">Apellido Paterno.</td>
                            <td title="Apm">Apellido Materno.</td>
                            <td title="Carrera">Carrera.</td>
                            <td title="Servicio a prestar">Servicio a prestar.</td>
                            <td title="Periodo">Periodo.</td>
                            <td><i className='mdi mdi-eye icon-blue' onClick={()=>setShowModal(!showModal)}></i></td>
                            <td></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td title="Matricula">Matricula.</td>
                            <td title="Nombre">Nombre.</td>
                            <td title="App">Apellido Paterno.</td>
                            <td title="Apm">Apellido Materno.</td>
                            <td title="Carrera">Carrera.</td>
                            <td title="Servicio a prestar">Servicio a prestar.</td>
                            <td title="Periodo">Periodo.</td>
                            <td><i className='mdi mdi-eye icon-blue' onClick={()=>setShowModal(!showModal)}></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </CardComponent>
        </div>
    )
}
export default Users
