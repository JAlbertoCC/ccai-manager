import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { DropDown } from './../components/ui/DropDown/DropDown'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { ModalComponentRegister } from './../components/ui/Modal/ModalComponentRegister'
import { useRegister } from '../hooks/useRegister';
import { ErrorMessage } from './../components/ui/Warnings/ErrorMessage';

const Register = () => {
  const { checkingInternalRegister } = useRegister();
  const [typeInputName, setTypeInputName] = useState('')
  const [typeInputLastNameF, setTypeInputLastNameF] = useState('')
  const [typeInputLastNameM, setTypeInputLastNameM] = useState('')
  const [typeInputAdress, setTypeInputAdress] = useState('')
  const [typeInputPhone, setTypeInputPhone] = useState('')
  const [typeInputGender, setTypeInputGender] = useState('M')
  const [typeInputIdentification, setTypeInputIdentification] = useState('')
  const [typeInputCareer, setTypeInputCareer] = useState('')
  const [typeInputService, setTypeInputService] = useState('Servicio Social')
  const [typeInputMail, setTypeInputMail] = useState('')
  const [typeInputPassword, setTypeInputPassword] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [genderList] = useState([{
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

    registerNewUser(body);
  }

  const registerNewUser = (body) => {
    setModalMessage('');
    setErrorMessage();
    setShowError(false);
    
    checkingInternalRegister(body)
      .then(item => {
        console.log(item)
        setShowModal(!showModal);
        setModalMessage(item[0].message);
        setTypeInputName('');
        setTypeInputLastNameF('')
        setTypeInputLastNameM('')
        setTypeInputAdress('')
        setTypeInputPhone('')
        setTypeInputGender('M')
        setTypeInputIdentification('')
        setTypeInputCareer('')
        setTypeInputService('Servicio Social')
        setTypeInputMail('')
        setTypeInputPassword('')
      })
      .catch(error => {
        setErrorMessage(error.message);
        setShowError(true);
      });
  }
  
   return (
    
    <div className='container register-content'>
      <HeaderComponent title="Registro"/>
      { showModal ? 
        <ModalComponentRegister
          classExtra="modal-register" 
          title="¡REGISTRO EXITOSO!"
          textModal={modalMessage}
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
            <InputLabel
              title="Nombre"
              hdlOnChange={(e) => setTypeInputName(e.target.value)}
            />
          </div>
          <div className="column is-4">
            <InputLabel
              title="Apellido paterno"
              hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)}
            />
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
              hdlOnChange={(e) => setTypeInputGender(e.target.value)}
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
            <DropDown
              items={serviceList}
              title="Servicio a prestar"
              hdlOnChange={(e) => setTypeInputService(e.target.value)}
            />
          </div>
          
          <div className="column is-4">
            <InputLabel title="Correo institucional" hdlOnChange={(e) => setTypeInputMail(e.target.value)} />
          </div>
          <div className="column is-4">
            <InputLabel type="password" title="Contraseña" hdlOnChange={(e) => setTypeInputPassword(e.target.value)} />
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

      {
      showError &&
        <ErrorMessage
          message={errorMessage}
          hdlOnClick={() => setShowError(!showError)}
        />
      }
    </div>
   );
}

export default Register
