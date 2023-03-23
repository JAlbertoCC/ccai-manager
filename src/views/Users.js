import React, { useState , useEffect} from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { ModalComponent } from './../components/ui/Modal/ModalComponent';

import { useUsers } from './../hooks/useUsers';

/* aquí estoy haciendo mejoras para realizar el servicio a la verga compa */

const Users = () => {
 const { checkingInternalUser} = useUsers();

    

    /*
    const [users, setUsers] = useState([]);
    const URL = "http://localhost:3001/api/consulting-students"
    const showData = async () =>{
      const response = await fetch(URL)
      const data = await response.json()
      
     setUsers(data)
     
    }
    */
   

    useEffect ( () =>{
      showData();
    }, [])

    const showData = async() =>{
        console.log(checkingInternalUser());
        
        
        
        
       
    }
       
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
         
                
                </tbody>
              
                </table>
            </CardComponent>
        </div>
    )
}

export default Users

/* 

           
                { consultingStudents ? consultingStudents.map((item, index)=>{             
                    return (
                        <tr key={index}>
                            <td>{item.matricula } </td>
                            <td>{item.name}</td>
                            <td>{item.first_name}</td>
                            <td>{item.second_name}</td>
                            <td>{item.name_career}</td>
                            <td>{item.service_provide}</td>
                            <td>{item.start_date}</td>
                          
                        </tr>
                       
                    )
                } ): <></>}

*/