import React, { useState } from "react";
import { HeaderComponentQuestion } from "./../components/ui/Header/HeaderComponentQuestion";
import {ModalComponentQuestion} from "./../components/ui/Modal/ModalComponentQuestion";

const Questionnaire = () => {
  const themes = [
    {
      //definicion de las secciones con preguntas y respuestas de todos los temas 
      
      theme: "Sección I: Programación",
      questions: [
        
        {
          question: "Seleccione los lenguajes de programación en los que usted ya ha programado:",
          options: [
            "C#.net",
            "Processing",
            "Lex, Flex",
            "CSS",
            "vb.net",
            "Ensamblador",
            "Python",
            "Java",
            "Ardublock",
            "R",
            "HTML",
            "Kotlin",
            "PHP",
            "Snap4arduino",
            "Prolog, Lisp",
            "Haskell",
            "Objective-C",
            "Javascript",
            "C, c++",
            "SQL"
          ],
        },
        {
          question: "De los siguientes IDE, ¿cuál o cuáles ha utilizado?",
          options: [
            "Netbeans",
            "Android Studio",
            "Visual Studio Code",
            "Anaconda",
            "Sublime Text",
            "BlueJ",
            "Eclipse",
            "SlickEdit",
            "Code::blocks",
            "Selenium",
            "RStudio"
          ],
        },
        {
          question: "¿Haskell es un lenguaje de Inteligencia Artificial para algoritmos de búsqueda?",
          options: ["Verdadero", "Falso"],
        },
        {
          question: "Estos algoritmos van aprendiendo y siendo más precisos conforme el usuario realiza acciones concretas con el lenguaje de programación R",
          options: ["Verdadero", "Falso"],
        },
        {
          question: "Cuando queremos que una página web se pueda ver en cualquier dispositivo celular o dispositivo móvil, ¿a ello se le conoce como?",
          options: ["Compatibilidad", "Portabilidad", "Accesibilidad", "Visibilidad"],
        },
      ],
    },
    {
      theme: "Sección II: Base de Datos",
      questions: [
        {
          question: "SQL permite la creación, gestión y administración de bases de datos, así como la eleción y manejo de las estructuras necesarias para el almacenamiento y búsqueda de información, ¿es verdadero o falso?",
          options: ["Verdadero", "Falso"],
        },
        {
          question: "¿Qué sistemas manejadores de base de datos usted ha utilizado?",
          options: [
            "MySQL",
            "SQL server",
            "MariaDB",
            "SQLite",
            "PostgreSQL",
            "Oracle",
            "MongoDB",
            "Sybase",
            "IBM: DB2 Everyplace",
            "SQL Anywhere Studio",
            "SQL server compact 4"
          ],
        },
        {
          question: "ACID es un acrónimo de atomicidad, consistencia, aislamiento y durabilidad, ¿verdadero o falso?",
          options: ["Verdadero", "Falso"],
        },
        {
          question: "¿Es importante tener normalizada una base de datos?",
          options: ["Si", "No"],
        },
        {
          question: "¿Cuántas formas o tipos de normalización existen?",
          options: ["Una", "Dos", "Tres", "Cuatro"],
        },
      ],
    },
    {
      theme: "Sección III: Sistemas Operativos",
      questions: [
        {
          question: "Si tengo un Windows Home puedo tener acceso a Azure o a clientes Hyper-V",
          options: ["Si", "No"],
        },
        {
          question: "¿Qué sistemas operativos has utilizado?",
          options: ["Windows", "MacOS", "Linux", "Unix", "Android"],
        },
        {
          question: "¿Has utilizado los comandos del sistema operativo a través de una terminal o consola del propio sistema operativo, para ejecutar y/o administrar al sistema operativo?",
          options: ["Si", "No"],
        },
        {
          question: "¿Qué es el kernel del sistema operativo?",
          options: [
            "El kernel es el núcleo del sistema operativo",
            "La parte más importante del sistema operativo",
            "Es el primer programa que arranca un equipo de computo",
            "Es quien se encarga de garantizar la carga y ejecución de procesos, entradas y salidas hacia o desde la memoria y el procesador"
          ],
        },
        {
          question: "¿Has instalado al menos en alguna ocasión un sistema operativo de manera Nativa?",
          options: ["Si", "No"],
        },
        {
          question: "¿Has instalado un sistema operativo en una máquina virtual?",
          options: ["Si", "No"],
        },
      ],
    },
    {
      theme: "Sección IV: Redes de Computadora",
      questions: [
        {
          question: "¿Qué diferencia hay entre un Dominio y un grupo de trabajo?",
          options: [
            "Un grupo de trabajo es cuando un grupo de computadoras están conectados a uno y comparten impresoras y otros dispositivos, y un dominio es una agrupación de computadoras en torno a un servidor centralizado",
            "Un dominio es cuando un grupo de computadoras están conectados a uno y comparten impresoras y otros dispositivos, y un grupo de trabajo es una agrupación de computadoras en torno a un servidor centralizado"
          ],
        },
        {
          question: "¿Cuentas con certificaciones CISCO? con cuantos cursos?",
          options: ["Uno", "Dos", "Tres", "Cuatro", "Cinco"],
        },
        {
          question: "Para hacer una red local entre 5 equipos de computo y cuyas especificaciones técnicas siguen el estándar conocido como Ethernet o IEEE 802.3 ¿Qué dispositivo utilizas?",
          options: ["Router", "Switch", "Access Point"],
        },
        {
          question: "Un punto de acceso inalámbrico puede interconectarse con otros WAPs y formar una red mayor, ¿cierto o falso?",
          options: ["Cierto", "Falso"],
        },
        {
          question: "Selecciona las normas de cableado estructurado para terminación de cables de red de 8 hilos",
          options: ["T568A", "T568B", "802.11"],
        },
      ],
    },
  ];

//componentes a usar
  const [isStarted, setIsStarted] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  //funcion que inicia el cuestionario
  const handleStart = () => {
    setIsStarted(true);
  };
//funcion que lo cancela, se usa en el boton igual el de arriba
  const handleCancel = () => {
    setIsStarted(false);
    setCurrentThemeIndex(0);
    setSelectedOptions({});
    setIsCompleted(false);
  };

  //funcion para regresar a la seccion anterior
  const handleBack = () => {
    if (currentThemeIndex > 0) {
      setCurrentThemeIndex(currentThemeIndex - 1);
    } else {
      setIsStarted(false);
      setCurrentThemeIndex(0);
      setSelectedOptions({});
      setIsCompleted(false);
    }
  };

  //funcion para avanzar
  const handleNextTheme = () => {
    const nextThemeIndex = currentThemeIndex + 1;
    if (nextThemeIndex < themes.length) {
      setCurrentThemeIndex(nextThemeIndex);
    }
  };

//funcion para la seleccion de opciones
  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = selectedOptions[questionIndex]
        ? selectedOptions[questionIndex].includes(option)
          ? selectedOptions[questionIndex].filter((item) => item !== option)
          : [...selectedOptions[questionIndex], option]
        : [option];

      return {
        ...prevSelectedOptions,
        [questionIndex]: updatedOptions,
      };
    });
  };

  return (
    <div className="questionnaire-container2">
      {/* Sección de inicio */}
    {!isStarted && (
      <div className="center-card2">
        <div className="card2">
            <div className="card-body2">
        <HeaderComponentQuestion title="Evaluación para ser aceptado(a) en el CCAI" />
        <div className="instructions">
          <div className="center-text2">
              <p>Por favor, lea las siguientes instrucciones antes de comenzar: En este cuestionario se tomarán
                temas que han sido parte de su formación academica, por lo que deberá contestar honesta y 
                éticamente cada una de las preguntas de acuerdo a sus habilidades y conocimientos previamente
                adquiridos.
              </p>
              <p> En cada sección se preguntarán temas referentes a dichos temas.</p>
              <div className="button-container2">
                <button onClick={handleStart} className="modal-btn2 btn-green2">
                  Continuar
                </button>
                <button onClick={handleCancel} className="modal-btn2 btn-red2">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>
      )}
      
{/* Sección de preguntas */}
{isStarted && !isCompleted && (
        <div className="questionnaire-card">
          <div className="card-title2">
          <HeaderComponentQuestion title={themes[currentThemeIndex].theme} />
          </div>
          <div className="card2">
            <div className="card-body2">
              {themes[currentThemeIndex].questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <p>Pregunta {questionIndex + 1}: {question.question}</p>
                  <div className="options-container">
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <input
                          type="checkbox"
                          name={`questionOption${questionIndex}`}
                          value={option}
                          checked={
                            selectedOptions[questionIndex]?.includes(option) || false
                          }
                          onChange={() =>
                            handleOptionSelect(questionIndex, option)
                          }
                        />
                        <label><strong>{option}</strong></label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Botones de navegación */}
              <div className="center-buttons2">
              {currentThemeIndex > 0 && (
              <button onClick={handleBack} className="modal-btn2 btn-blue2">
                Atrás
              </button>
            )}
                {currentThemeIndex < themes.length - 1 && (
                  <button onClick={handleNextTheme} className="modal-btn2 btn-yellow2">
                    Siguiente Tema
                  </button>
                )}
                {currentThemeIndex === themes.length - 1 && (
                  <button onClick={() => setIsCompleted(true)} className="modal-btn2 btn-green2">
                    Enviar
                  </button>
                )}
                <button onClick={handleCancel} className="modal-btn2 btn-red2">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

 {/* Modal que muestra el mensaje de registro exitoso */}
      {isCompleted && (
        <ModalComponentQuestion
          title="¡REGISTRO EXITOSO!"
          isActive={true}
          hdlOnclick={() => setIsCompleted(false)}
          titleGreen="Cerrar"
          hdlOnClickGreen={() => setIsCompleted(false)}
        >
          <p>
            Los docentes se comunicarán con usted para informarle si usted fue
            aceptado en el CCAI.
          </p>
        </ModalComponentQuestion>
      )}
    </div>
  );
};

export default Questionnaire;