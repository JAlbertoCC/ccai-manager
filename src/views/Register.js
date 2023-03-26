import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { DropDown } from './../components/ui/DropDown/DropDown'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { ModalComponentRegister } from './../components/ui/Modal/ModalComponentRegister'
import { useRegister } from '../hooks/useRegister';


const Register = () => {
  const { checkingInternalRegister } = useRegister();
  const [typeInputName, setTypeInputName] = useState('')
  const [typeInputLastNameF, setTypeInputLastNameF] = useState('')
  const [typeInputLastNameM, setTypeInputLastNameM] = useState('')
  const [typeInputAdress, setTypeInputAdress] = useState('')
  const [typeInputPhone, setTypeInputPhone] = useState('')
  const [typeInputGender, setTypeInputGender] = useState('')
  const [typeInputIdentification, setTypeInputIdentification] = useState('')
  const [typeInputCareer, setTypeInputCareer] = useState('')
  const [typeInputService, setTypeInputService] = useState('')
  const [typeInputMail, setTypeInputMail] = useState('')
  const [typeInputPassword, setTypeInputPassword] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [genderList, setGenderList] = useState([{
    id: 'M',
    name: "Masculino"
  }, 
  {
    id: 'F',
    name: "Femenino"
  }]);
  const [serviceList, setServiceList] = useState([{
      id: 1,
      name: "Servicio Social"
    }, 
    {
      id: 2,
      name: "Residencias Profesionales"
    }
  ]);
  

  const registerUser = () => {
    
    const body = {
      name: typeInputName,
      lastnamef: typeInputLastNameF,
      lastnamem: typeInputLastNameM,
      adress: typeInputAdress,
      phone: typeInputPhone,
      gender: typeInputGender,
      matricula: typeInputIdentification,
      career: typeInputCareer,
      service: typeInputService,
      mail: typeInputMail,
      password: typeInputPassword
    }
    setShowModal(!showModal)
    console.log("OBJETO CREADO", body)
    registerNewUser(body)
  }

  //const goToLink = (uri) => {
    //navigate(uri)
  //} 

  const registerNewUser = (body) => {
      checkingInternalRegister(body)
      .then(item => {
          console.log(item.body)
      })
      .catch(error => {
        
        console.log('error', error.message)
       
      });
    }
  
  
   return (
    
    <div className='container register-content'>
      <HeaderComponent title="Registro"/>
      { showModal ? 
        <ModalComponentRegister
          classExtra="modal-register" 
          title="¡REGISTRO EXITOSO!" 
          isActive={showModal} 
          hdlOnclick={()=>setShowModal(!showModal)}
        /> : <></>
      }          

      <CardComponent classExtra="opacity-card">
        <div className="columns container-personal">
          <div className="column is-11">
            <p className='title-register'>DATOS PERSONALES</p>
          </div>
          <div className="column is-4">
            <InputLabel title="Nombre" hdlOnChange={(e) => setTypeInputName(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Apellido paterno" hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Apellido materno" hdlOnChange={(e) => setTypeInputLastNameM(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Dirección" hdlOnChange={(e) => setTypeInputAdress(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Telefono" hdlOnChange={(e) => setTypeInputPhone(e.target.value)} />
          </div>
          <div className="column is-4">
            <DropDown
              items={genderList}
              title="Sexo"
            />
          </div>

          <div className="column is-11">
            <p className='title-register'>DATOS INSTITUCIONALES</p>
          </div>

          <div className="column is-4">
            <InputLabel title="Matricula" hdlOnChange={(e) => setTypeInputIdentification(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Carrera" hdlOnChange={(e) => setTypeInputCareer(e.target.value)} />
          </div>
          <div className="column is-4">
            <DropDown items={serviceList}
            title="Servicio a prestar"/> 
          </div>
          
          <div className="column is-4">
            <InputLabel title="Correo institucional" hdlOnChange={(e) => setTypeInputMail(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel title="Contraseña" hdlOnChange={(e) => setTypeInputPassword(e.target.value)} />
          </div>
          <div className="column is-4">
            <p className="control has-icon-right">
              <button
                className="button button-register"
                onClick={() => registerUser() }
              >
                <span className="icon is-right">
                  <i className="mdi mdi-plus-circle-outline"></i>
                </span>  
              </button>
            </p>  
          </div>
        </div>
      </CardComponent>
    </div>
   );
}

export default Register
