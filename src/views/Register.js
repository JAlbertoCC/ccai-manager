import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

//Importación de componentes y hooks personalizados
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
//se creo esta instancia
  const navigate = useNavigate();
  const goToLink = (uri) => {
    navigate(uri);
  };
  //Configurar el form usando react hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { checkingInternalRegister } = useRegister();
  const { consultCareer } = useCareer();
  const { consultService } = useService();

  //Estados para el manejo de datos y visualizacion
  const [messageType, setMessageType] = useState("is-danger");
 

  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [career, setCareer] = useState([]);

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
// hola
  useEffect(() => {
    //Consultamos datos necesarios al cargar el componente
    showData();
    showService();
  }, []);

  const showService = async () => {
    //Consultamos servicio
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

  const [formData, setFormData] = useState({
    // datos personales
    name: "",
    first_name: "",
    second_name: "",
    cell_phoneNumber: "",
    gender: "M",
    // Domicilio
    road: "",
    noAbroad: "",
    noInside: "",
    colony: "",
    locality: "",
    municipality: "",
    government: "",
    postalC: "",
    observations: "",
    // datos institucionales
    matricula: "",
    carrer: "INGENIERIA EN INFORMATICA",
    service_provide: "Servicio Social",
    institutional_emailEs: "",
    password: "",
  });

  const handleFormChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = () => {
    //Creamos objeto de datos que se enviará al realizar el registro
    const body = {
      // datos personales
      name: formData.name,
      first_name: formData.first_name,
      second_name: formData.second_name,
      cell_phoneNumber: formData.cell_phoneNumber,
      gender: formData.gender,
      // Domicilio
      road: formData.road,
      noAbroad: formData.noAbroad,
      noInside: formData.noInside,
      colony: formData.colony,
      locality: formData.locality,
      municipality: formData.municipality,
      government: formData.government,
      postalC: formData.postalC,
      observations: formData.observations,
      // datos institucionales
      matricula: formData.matricula,
      carrer: formData.carrer,
      service_provide: formData.service_provide,
      institutional_emailEs: formData.institutional_emailEs,
      password: formData.password,
    };
    console.log(body);
    if (isValid){ registerNewUser(body); //if (isDirty && isValid) registerNewUser(body);
  }
  };

  const registerNewUser = (body) => {
    //Registramos nuevo usuario
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
        {/*Modal que se mostrara al realizar el registro de forma exitosa*/}
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
        {/*ANALIZAR FUNCION DE MODAL COMPONENT REGISTER CON WENDY, bueno, esto es un modal de registro xD*/}
        <ModalComponentRegister
          isActive={showModal}
          textModal={modalMessage}
          hdlOnclick={() => {
            setShowModal(!showModal);
            setModalMessage("");
          }}
        />

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
                  hdlOnChange={(e) => handleFormChange("name",e.target.value)}
                  name="name"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligatorio",
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
                  hdlOnChange={(e) => handleFormChange("first_name",e.target.value)}
                  name="first_name"
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
                  hdlOnChange={(e) => handleFormChange("second_name",e.target.value)}
                  name="second_name"
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
                  hdlOnChange={(e) => handleFormChange("cell_phoneNumber",e.target.value)}
                  name="cell_phoneNumber"
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
                  hdlOnChange={(e) => handleFormChange("gender",e.target.value)}
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
                  isError={errors.road}
                  hdlOnChange={(e) => handleFormChange("road", e.target.value)}
                  name="road"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligatorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="No. Exterior"
                  isError={errors.noAbroad}
                  hdlOnChange={(e) =>
                    handleFormChange("noAbroad", e.target.value)
                  }
                  name="noAbroad"
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
                  isError={errors.noInside}
                  hdlOnChange={(e) =>
                    handleFormChange("noInside", e.target.value)
                  }
                  name="noInside"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Colonia"
                  isError={errors.colony}
                  hdlOnChange={(e) =>
                    handleFormChange("colony", e.target.value)
                  }
                  name="colony"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Localidad"
                  isError={errors.locality}
                  hdlOnChange={(e) =>
                    handleFormChange("locality", e.target.value)
                  }
                  name="locality"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Municipio"
                  isError={errors.municipality}
                  hdlOnChange={(e) =>
                    handleFormChange("municipality", e.target.value)
                  }
                  name="municipality"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Estado"
                  isError={errors.government}
                  hdlOnChange={(e) =>
                    handleFormChange("government", e.target.value)
                  }
                  name="government"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Codigo Postal"
                  isError={errors.postalC}
                  hdlOnChange={(e) =>
                    handleFormChange("postalC", e.target.value)
                  }
                  name="postalC"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>
              <div className="column is-4">
                <InputLabel
                  title="Observaciones"
                  isError={errors.observations}
                  hdlOnChange={(e) =>
                    handleFormChange("observations", e.target.value)
                  }
                  name="observations"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Este campo es obligratorio",
                  }}
                />
              </div>

              <div className="column is-11">
                <p className="title-register">DATOS INSTITUCIONALES</p>
              </div>

              <div className="column is-4">
                <InputLabel
                  title="Matricula"
                  isError={errors.card}
                  hdlOnChange={(e) =>
                    handleFormChange("matricula",e.target.value)
                  }
                  name="matricula"
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
                  hdlOnChange={(e) => handleFormChange("carrer",e.target.value)}
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
                  name="service_provide"
                  errors={errors}
                  register={register}
                  hdlOnChange={(e) => handleFormChange("service_provide",e.target.value)}
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
                  hdlOnChange={(e) => handleFormChange("institutional_emailEs", e.target.value)}
                  name="institutional_emailEs"
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
                  name="password"
                  hdlOnChange={(e) => handleFormChange("password", e.target.value)}
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
                    type="button"
                    className="button button-register"
                    //onClick={() => registerUser()}
                    onClick={() =>{
                      if (isValid){
                      registerUser();
                      goToLink(`/Questionnaire/${formData.matricula}`);
                    }else{
                      alert("Por favor completa todos los campos obligatorios correctamente antes de registrar.");
                    }
                  }}
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
