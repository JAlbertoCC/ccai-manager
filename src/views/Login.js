import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { ButtonComponent } from '../components/ui/Buttons/PrimaryButton'
import { CardComponent } from '../components/ui/Cards/CardComponent'

const Login = () => {
  const [typeInputPassword, setTypeInputPassword] = useState('password')
  const [iconPassword, setIconPassword] = useState('mdi-eye-off')
  const navigate = useNavigate()

  const changeType = () => {
    // mdi-eye-outline
    console.log('Hola')
    setTypeInputPassword('text')
  }

  const goToLink = (uri) => {
    navigate(uri)
  }

  return (
    <div className='section login-content'>
      <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
      <CardComponent classExtra="opacity-card">
        <figure className="image is-96x96 center-img">
          <img src={require("./../assets/logo.png" )} alt="" />
        </figure>

        <div className='center-img inputs-content'>
          <InputLabel
            iconName="mdi-account"
            typeInput="text"
          />
          <InputLabel
            iconName={iconPassword}
            typeInput={typeInputPassword}
            isPassword={true}
            hdlOnClick={changeType}
          />

          <div className='text-actions'>
            <div>
              <a href='/'>¿Haz olvidado tu contraseña?</a>
            </div>
            <div>
              <a href='/'>Fechas de servicio y residencias</a>
            </div>
          </div>       
        </div>

        <div className="buttons-content">
          <ButtonComponent
            buttonText="Iniciar sesión"
            hdlOnClickEvent={() => goToLink('/home')}
          />
          <ButtonComponent
            buttonText="Registrarse"
            hdlOnClickEvent={() => goToLink('/register')}
          />
        </div>

      </CardComponent>
    </div>
  )
}

export default Login