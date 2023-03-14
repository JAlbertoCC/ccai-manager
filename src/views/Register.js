import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { ModalComponentRegister } from './../components/ui/Modal/ModalComponentRegister'


const Register = () => {
  const navigate = useNavigate()
  const [typeInputName, setTypeInputName] = useState('name')
  const [typeInputLastNameF, setTypeInputLastNameF] = useState('last-name-f')
  const [typeInputLastNameM, setTypeInputLastNameM] = useState('last-name-m')
  const [typeInputAdress, setTypeInputAdress] = useState('adress')
  const [typeInputPhone, setTypeInputPhone] = useState('phone')
  const [typeInputGender, setTypeInputGender] = useState('gender')
  const [typeInputIdentification, setTypeInputIdentification] = useState('identification')
  const [typeInputCareer, setTypeInputCareer] = useState('career')
  const [typeInputService, setTypeInputService] = useState('service')
  const [typeInputMail, setTypeInputMail] = useState('mail')
  const [typeInputPassword, setTypeInputPassword] = useState('password')
  const [showModal, setShowModal] = useState(false);


  const registerUser = () => {
    
    const body = {
      name: typeInputName,
      lastnamef: typeInputLastNameF,
      lastnamem: typeInputLastNameM,
      adress: typeInputAdress,
      phone: typeInputPhone,
      gender: typeInputGender,
      identification: typeInputIdentification,
      career: typeInputCareer,
      service: typeInputService,
      mail: typeInputMail,
      password: typeInputPassword
    }
    setShowModal(!showModal)
   console.log("OBJETO CREADO")
  }

  const goToLink = (uri) => {
    navigate(uri)
  } 
  
   return (
    
    <div className='container register-content'>
      <HeaderComponent title="Registro"/>
      { showModal ? 
                <ModalComponentRegister
                    classExtra = "modal-register" 
                    title = "¡REGISTRO EXITOSO!" 
                    isActive = "false" 
                    hdlOnclick= { ()=>setShowModal (!showModal)} >
                </ModalComponentRegister> : <></>
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
            <InputLabel title="Sexo" hdlOnChange={(e) => setTypeInputGender(e.target.value)} />
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
            <InputLabel title="Servicio a prestar" hdlOnChange={(e) => setTypeInputService(e.target.value)} />
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
                
                //onClick={()=>setShowModal(!showModal)}
                //onClick={() => goToLink('/SuccesfullRegister')}
              >
                <span className="icon is-right">
                  <i className="mdi mdi-plus-circle-outline"></i>
                </span>  
              </button>
            </p>  
          </div>
        </div>
      </CardComponent>

      {showModal ? <></> : (
      
      <div class="notification-register notification is-danger">
        <button class="delete"></button>
        Correo o contraseña incorrectos.
      </div>
        

      )}

    </div>

    
   )
}

export default Register
