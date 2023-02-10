import React from 'react';
import { useNavigate  } from 'react-router-dom'

import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'


const Register = () => {
  const navigate = useNavigate()

  const goToLink = (uri) => {
    navigate(uri)
  } 

   return (
    <div className='container register-content'>
      <HeaderComponent title="Registro"/>
      <CardComponent classExtra="opacity-card">
        <div className="columns container-personal">
          <div className="column is-11">
            <p className='title-register'>DATOS PERSONALES</p>
          </div>
          <div className="column is-4">
            <InputLabel title="Nombre" />
          </div>
          <div className="column is-4">
            <InputLabel title="Apellido paterno" />
          </div>
          <div className="column is-4">
            <InputLabel title="Apellido materno" />
          </div>
          <div className="column is-4">
            <InputLabel title="Dirección" />
          </div>
          <div className="column is-4">
            <InputLabel title="Telefono" />
          </div>
          <div className="column is-4">
            <InputLabel title="Sexo" />
          </div>

          <div className="column is-11">
            <p className='title-register'>DATOS INSTITUCIONALES</p>
          </div>

          <div className="column is-4">
            <InputLabel title="Matricula" />
          </div>
          <div className="column is-4">
            <InputLabel title="Carrera" />
          </div>
          <div className="column is-4">
            <InputLabel title="Servicio a prestar" />
          </div>
          <div className="column is-4">
            <InputLabel title="Correo institucional" />
          </div>
          <div className="column is-4">
            <InputLabel title="Contraseña" />
          </div>
          <div className="column is-4">
            <p className="control has-icon-right">
              <button
                className="button button-register"
                onClick={() => goToLink('/SuccesfullRegister')}
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
   )
}

export default Register
