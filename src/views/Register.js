import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { CardComponent } from "./../components/ui/Cards/CardComponent";
import { InputLabel } from "./../components/ui/Inputs/InputLabel";
import { DropDown } from "./../components/ui/DropDown/DropDown";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { useRegister } from "../hooks/useRegister";
import { useCareer } from "./../hooks/useCareer";
import { useService } from "./../hooks/useService";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";
import { ErrorMessage } from "./../components/ui/Warnings/ErrorMessage";
import { ModalComponentRegister } from "../components/ui/Modal/ModalComponentRegister";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
  const [typeInputCareer, setTypeInputCareer] = useState(
    "INGENIERÍA INFORMATICA"
  );
  const [typeInputService, setTypeInputService] = useState("Servicio Social");
  const [typeInputMail, setTypeInputMail] = useState("");
  const [typeInputPassword, setTypeInputPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [career, setCareer] = useState([]);
  const { consultCareer } = useCareer();

  // hook para retornar en un body los datos de registro reduciendo el numero de hooks Domicilio
  const [domicilio, setDomicilio] = useState({
    calle: String,
    noExte: Number,
    noInte: Number,
    colonia: String,
    localidad: String,
    municipio: String,
    estado: String,
    cP: Number,
    observaciones: String,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDomicilio((prevDomicilio) => ({ ...prevDomicilio, [name]: value }));
  };


  // REVISAR SI LAS LISTAS SON NECESARIAS O SOLO CONSUMIR LAS VISTA /api/list-sex, /api/list-carrer, /api/list-service
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
        const newArray = result.map((item, index) => {
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
    consultCareer()
      .then((result) => {
        const newArray = result.map((item, index) => {
          return {
            id: item.id_career,
            name: item.name_career,
          };
        });
        setCareer(newArray);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const registerUser = () => {
    const body = {
      // datos personales
      name: typeInputName,
      first_name: typeInputLastNameF,
      second_name: typeInputLastNameM,
      cell_phoneNumber: typeInputPhone,
      gender: typeInputGender,
      // Domicilio
      road: domicilio.calle,
      noAbroad: domicilio.noExte,
      noInside: domicilio.noInte,
      colony: domicilio.colonia,
      locality: domicilio.localidad,
      municipality: domicilio.municipio,
      government: domicilio.estado,
      postalC: domicilio.cP,
      observations: domicilio.observaciones,
      // datos institucionales
      matricula: typeInputIdentification,
      carrer: typeInputCareer,
      service_provide: typeInputService,
      institutional_emailEs: typeInputMail,
      password: typeInputPassword,
    };
    console.log(body);
    if (isDirty && isValid) registerNewUser(body);
  };

  const registerNewUser = (body) => {
    checkingInternalRegister(body)
      .then((item) => {
        console.log(item);
        setShowModal(true);
        setModalMessage(item.message || "");
      })
      .catch((error) => {
        setShowModal(true);
        setModalMessage(error.message || "");
        console.log("error", error.message);
      });
  };

  return (
    <>
      <div className="container register-content">
        <HeaderComponent title="Registro" />

        {showModal ? (
          <ModalComponentGlobal
            classExtra="modal-register"
            title="¡REGISTRO EXITOSO!"
            isActive="false"
            hdlOnclick={() => setShowModal(!showModal)}
          ></ModalComponentGlobal>
        ) : (
          <></>
        )}
        {/*ANALIZAR FUNCION DE MODAL COMPONENT REGISTER CON WENDY */}
        <ModalComponentRegister
          isActive={showModal}
          textModal={modalMessage}
          hdlOnclick={() => {
            setShowModal(!showModal);
            setModalMessage("");
          }}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardComponent classExtra="opacity-card">
            <div className="columns container-personal">
              <div className="column is-11">
                <p className="title-register">DATOS PERSONALES</p>
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Nombre"
                  isError={errors.name}
                  hdlOnChange={(e) => setTypeInputName(e.target.value)}
                  name="name"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.name && (
                  <p class="help is-danger" role="alert">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Apellido paterno"
                  isError={errors.lastNameF}
                  hdlOnChange={(e) => setTypeInputLastNameF(e.target.value)}
                  name="lastNameF"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.lastNameF && (
                  <p class="help is-danger" role="alert">
                    {errors.lastNameF?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Apellido materno"
                  isError={errors.lastNameM}
                  hdlOnChange={(e) => setTypeInputLastNameM(e.target.value)}
                  name="lastNameM"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.lastNameM && (
                  <p class="help is-danger" role="alert">
                    {errors.lastNameM?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Telefono"
                  isError={errors.phone}
                  hdlOnChange={(e) => setTypeInputPhone(e.target.value)}
                  name="phone"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                    pattern: {
                      value:
                        /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/i,
                      message: "Formato incorrecto. ",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximo 10 caracteres.",
                    },
                  }}
                />
                {errors?.phone && (
                  <p class="help is-danger" role="alert">
                    {errors.phone?.message}
                  </p>
                )}
              </div>

              <div className="column is-4">
                <DropDown
                  items={genderList}
                  title="Sexo"
                  isError={errors.gender}
                  hdlOnChange={(e) => setTypeInputGender(e.target.value)}
                  name="gender"
                  errors={errors}
                  valueSelect="id"
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.gender && (
                  <p class="help is-danger" role="alert">
                    {errors.gender?.message}
                  </p>
                )}
              </div>

              <div className="column is-11">
                <p className="title-register">DOMICILIO</p>
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Calle"
                  isError="{errors.name}"
                  hdlOnChange={(e) => handleChange.calle( e.target.value)}
                  name="calle"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel 
                  title="No. Exterior"
                  isError="{errors.name}"
                  hdlOnChange={(e) => handleChange ({ noExte: e.target.value })}
                  name="NoExterior"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                 />
              </div>
              <div className="column is-4">
                <InputLabel 
                  title="No. Interior" 
                  isError="{errors.name}"
                  hdlOnChange={(e) => handleChange ({ noInte: e.target.value })}
                  name="NoInterior"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel title="Colonia" />
              </div>
              <div className="column is-4">
                <InputLabel title="Localidad" />
              </div>
              <div className="column is-4">
                <InputLabel title="Municipio" />
              </div>
              <div className="column is-4">
                <InputLabel title="Estado" />
              </div>
              <div className="column is-4">
                <InputLabel title="Codigo Postal" />
              </div>
              <div className="column is-4">
                <InputLabel title="Observaciones" />
              </div>

              <div className="column is-11">
                <p className="title-register">DATOS INSTITUCIONALES</p>
              </div>

              <div className="column is-4">
                <InputLabel
                  title="Matricula"
                  isError={errors.card}
                  hdlOnChange={(e) =>
                    setTypeInputIdentification(e.target.value)
                  }
                  name="card"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                    pattern: {
                      value:
                        /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/i,
                      message: "Formato incorrecto. ",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximo 10 caracteres.",
                    },
                  }}
                />
                {errors?.card && (
                  <p class="help is-danger" role="alert">
                    {errors.card?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <DropDown
                  items={career}
                  title="Carrera"
                  isError={errors.career}
                  name="career"
                  errors={errors}
                  register={register}
                  hdlOnChange={(e) => setTypeInputCareer(e.target.value)}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.career && (
                  <p class="help is-danger" role="alert">
                    {errors.career?.message}
                  </p>
                )}
              </div>

              <div className="column is-4 ">
                <DropDown
                  items={serviceList}
                  title="Servicio a prestar"
                  isError={errors.service}
                  name="service"
                  errors={errors}
                  register={register}
                  hdlOnChange={(e) => setTypeInputService(e.target.value)}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.service && (
                  <p class="help is-danger" role="alert">
                    {errors.service?.message}
                  </p>
                )}
              </div>

              <div className="column is-4">
                <InputLabel
                  title="Correo Institucional"
                  isError={errors.email}
                  hdlOnChange={(e) => setTypeInputMail(e.target.value)}
                  name="email"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                    pattern: {
                      value:
                        /^[A-Z0-9]+@TESE\.edu\.mx/i || /^[0-9]+@TESE\.edu\.mx/i,
                      message: "Formato incorrecto. ",
                    },
                  }}
                />
                {errors?.email && (
                  <p class="help is-danger" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <InputLabel
                  typeInput="password"
                  title="Contraseña"
                  isError={errors.pass}
                  name="pass"
                  hdlOnChange={(e) => setTypeInputPassword(e.target.value)}
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
                {errors?.pass && (
                  <p class="help is-danger" role="alert">
                    {errors.pass?.message}
                  </p>
                )}
              </div>
              <div className="column is-4">
                <p className="control has-icon-right">
                  <button
                    className="button button-register"
                    onClick={() => registerUser()}
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

      {showError && (
        <ErrorMessage
          message={errorMessage}
          hdlOnClick={() => setShowError(!showError)}
          messageType={messageType}
        />
      )}
    </>
  );
};

export default Register;
