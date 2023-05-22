import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

import { ModalComponentGlobal } from './../components/ui/Modal/ModalComponentGlobal'
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { DropDown } from './../components/ui/DropDown/DropDown'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { ModalComponentRegister } from './../components/ui/Modal/ModalComponentRegister'
import { useRegister } from '../hooks/useRegister';
import { useCareer } from "./../hooks/useCareer";
import { useService } from "./../hooks/useService";

import { ErrorMessage } from "./../components/ui/Warnings/ErrorMessage";

const Register = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
  const onSubmit = data => console.log(data);
  
  console.log(errors);

  const { checkingInternalRegister } = useRegister();
  const [isLoader, setIsLoader] = useState(false);
  const [messageType, setMessageType] = useState("is-danger");
  const [typeInputName, setTypeInputName] = useState("");
  const [typeInputLastNameF, setTypeInputLastNameF] = useState("");
  const [typeInputLastNameM, setTypeInputLastNameM] = useState("");
  const [typeInputAdress, setTypeInputAdress] = useState("");
  const [typeInputPhone, setTypeInputPhone] = useState("");
  const [typeInputGender, setTypeInputGender] = useState("M");
  const [typeInputIdentification, setTypeInputIdentification] = useState("");
  const [typeInputCareer, setTypeInputCareer] = useState("INGENIERÍA INFORMATICA");
  const [typeInputService, setTypeInputService] = useState("Servicio Social");
  const [typeInputMail, setTypeInputMail] = useState("");
  const [typeInputPassword, setTypeInputPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [career, setCareer] = useState([]);
  const { consultCareer } = useCareer();
  const [genderList] = useState([
    {
      id: "M",
      name: "Masculino",
    },
    {
      id: "F",
      name: "Femenino",
    },
  ]);

  const [serviceList, setServiceList] = useState([
    {
      id: 1,
      name: "Servicio Social",
    },
    {
      id: 2,
      name: "Residencias Profesionales",
    },
  ]);

  const { consultService } = useService();

  useEffect(() => {
    showData();
    showService();
  }, []);

  const showService = async () => {
    consultService()
      .then((result) => {
        const newArray =
          result.map((item, index) => {
            return {
              id: item.id_service,
              name: item.service_name,
            };
          });
        setServiceList(newArray);
        console.log("result", result);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const showData = async () => {
    consultCareer().then(result => {
      const newArray = result.map((item, index) => {
        return {
          id: item.id_career,
          name: item.name_career
        }
      })
      setCareer(newArray)
      console.log(result)
    }).catch(error => {
      console.error(error);
    });
  }

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
      password: typeInputPassword,
    };
    
    if (isDirty && isValid) registerNewUser(body);
  }

  const registerNewUser = (body) => {
    checkingInternalRegister(body)
      .then((item) => {
        setShowModal(true);
        setModalMessage(item.message || '');
      })
      .catch((error) => {
        setShowModal(true);
        setModalMessage(error.message || '');
        console.log("error", error.message);
      });
  }

  
  return (
    <>
    <div className='container register-content'>
      <HeaderComponent title="Registro" />
      <form onSubmit={handleSubmit(onSubmit)}>
      <CardComponent  classExtra="opacity-card">
        <div className="columns container-personal">
          <div className="column is-11">
            <p className="title-register">DATOS PERSONALES</p>
          </div>
          <div className="column is-4">
            <InputLabel
              title="Nombre" 
              hdlOnChange={(e) => setTypeInputName(e.target.value)}
              name="name"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.name && <p role="alert">{errors.name?.message}</p>}
          </div>
          <div className="column is-4">
            <InputLabel
              title="Apellido paterno"
              hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)}
              name="lastNameF"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.lastNameF && <p role="alert">{errors.lastNameF?.message}</p>}
          </div>
          <div className="column is-4">
            <InputLabel
              title="Apellido materno"
              hdlOnChange={(e) => setTypeInputLastNameM(e.target.value)}
              name="lastNameM"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.lastNameM && <p role="alert">{errors.lastNameM?.message}</p>}
          </div>
          <div className="column is-4">
            <InputLabel
              title="Dirección"
              hdlOnChange={(e) => setTypeInputAdress(e.target.value)}
              name="addres"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.addres && <p role="alert">{errors.addres?.message}</p>}
          </div>
          <div className="column is-4">
            <InputLabel
              title="Telefono"
              hdlOnChange={(e) => setTypeInputPhone(e.target.value)}
              name="phone"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio",
                pattern: {
                  value: /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/i,
                  message: "Formato incorrecto. "
                },
                maxLength: {
                  value: 10,
                  message:"Maximo 10 caracteres."
                }
              }}
            />
            {errors?.phone && <p role="alert">{errors.phone?.message}</p>}
          </div>

          <div className="column is-4">
            <DropDown
              items={genderList}
              title="Sexo"
              hdlOnChange={(e) => setTypeInputGender(e.target.value)}
              name="gender"
              errors={errors}
              valueSelect='id'
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.gender && <p role="alert">{errors.gender?.message}</p>}
          </div>

          <div className="column is-11">
            <p className="title-register">DATOS INSTITUCIONALES</p>
          </div>

          <div className="column is-4">
            <InputLabel
              title="Matricula"
              hdlOnChange={(e) => setTypeInputIdentification(e.target.value)}
              name="card"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio",
                pattern: {
                  value: /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/i,
                  message: "Formato incorrecto. "
                },
                maxLength: {
                  value: 10,
                  message:"Maximo 10 caracteres."
                }
              }}
            />
            {errors?.card && <p role="alert">{errors.card?.message}</p>}
          </div>
          <div className="column is-4">
            <DropDown items={career}
              title="Carrera" 
              name="career"
              isError={errors.career}
              errors={errors}
              register={register}
              hdlOnChange={(e) => setTypeInputCareer(e.target.value)}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.career && <p role="alert">{errors.career?.message}</p>}
          </div>

          <div className="column is-4 ">
            <DropDown items={serviceList}
              title="Servicio a prestar"
              name="service"
              errors={errors}
              register={register}
              hdlOnChange={(e) => setTypeInputService(e.target.value)}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.service && <p role="alert">{errors.service?.message}</p>}
          </div>

          <div className="column is-4">
            <InputLabel
              title="Correo Institucional"
              hdlOnChange={(e) => setTypeInputMail(e.target.value)}
              name="email"
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio",
                pattern: {
                  value: /^[A-Z0-9]+@TESE\.edu\.mx/i || /^[0-9]+@TESE\.edu\.mx/i,
                  message: "Formato incorrecto. "
                }
              }}
            />
            {errors?.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="column is-4">
            <InputLabel
              typeInput="password"
              title="Contraseña" 
              name="pass"
              hdlOnChange={(e) => setTypeInputPassword(e.target.value)}
              errors={errors}
              register={register}
              validationSchema={{ 
                required: "Este campo es obligratorio"
              }}
            />
            {errors?.pass && <p role="alert">{errors.pass?.message}</p>}
          </div>
          <div className="column is-4">
            <p className="control has-icon-right">
              <button 
                className="button button-register"
                onClick={()=>setShowModal(!showModal)}
                //onClick={() => registerUser()}
              >
                <span className="icon is-right">
                  <i className="mdi mdi-plus-circle-outline"></i>
                </span>
              </button>
            </p>
          </div>
        </div>
      </CardComponent>
      </form>
    </div>

    {
      showError &&
        <ErrorMessage
          message={errorMessage}
          hdlOnClick={() => setShowError(!showError)}
          messageType={messageType}
        />
      }
    </>
   );
}

export default Register
