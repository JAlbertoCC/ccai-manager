import React, { useState } from "react";
import { HeaderComponent } from "./../components/ui/Header/HeaderComponent";
import { ModalComponentGlobal } from "./../components/ui/Modal/ModalComponentGlobal";

const Questionnaire = () => {
  const themes = [
    {
      theme: "Programacion",
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
      theme: "Base de Datos",
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
      theme: "Sistemas Operativos",
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
      theme: "Redes de Computadora",
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

  const [isStarted, setIsStarted] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleCancel = () => {
    setIsStarted(false);
    setCurrentThemeIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setIsCompleted(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < themes[currentThemeIndex].questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (currentThemeIndex < themes.length - 1) {
      setCurrentThemeIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setIsCompleted(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const currentOptions = prevSelectedOptions[currentQuestionIndex] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];

      return {
        ...prevSelectedOptions,
        [currentQuestionIndex]: updatedOptions,
      };
    });
  };

  const progressBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${((currentThemeIndex * themes[currentThemeIndex].questions.length + currentQuestionIndex) * 100) / (themes.length * themes[currentThemeIndex].questions.length)}%`,
    background: "#007BFF",
    height: "5px",
    zIndex: 9999,
    transition: "width 0.3s ease",
  };

  return (
    <>
      {isStarted && !isCompleted && (
        <div style={progressBarStyle}></div>
      )}

      <div className="section">
        {!isStarted && <HeaderComponent title="Evaluación para ser aceptado(a) en el CCAI" />}

        {isStarted && !isCompleted && <HeaderComponent title={themes[currentThemeIndex].theme} />}

        <div className="instructions">
          {!isStarted && (
            <>
              <p>Por favor, lea las siguientes instrucciones antes de comenzar:</p>
              <p>1. Este cuestionario aborda temas que han sido parte de su formación.</p>
              <p>2. Responda honesta y éticamente cada una de las preguntas de acuerdo a sus habilidades y conocimientos previamente adquiridos.</p>
              
              <div style={{ margin: "10px 0" }}>
                <button onClick={handleStart} className="modal-btn">Continuar</button>
                <button onClick={handleCancel} className="modal-btn">Cancelar</button>
              </div>
            </>
          )}
          {isStarted && !isCompleted && <p>Pregunta {currentQuestionIndex + 1}: {themes[currentThemeIndex].questions[currentQuestionIndex].question}</p>}
        </div>

        {isStarted && !isCompleted && (
          <div className="card">
            <div className="card-body">
              <div>
                {themes[currentThemeIndex].questions[currentQuestionIndex].options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="questionOption"
                      value={option}
                      checked={selectedOptions[currentQuestionIndex]?.includes(option)}
                      onChange={() => handleOptionSelect(option)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
              <div className="buttons">
                {currentQuestionIndex < themes[currentThemeIndex].questions.length - 1 && <button onClick={handleNext} className="modal-btn">Siguiente</button>}
                {currentQuestionIndex === themes[currentThemeIndex].questions.length - 1 && currentThemeIndex < themes.length - 1 && <button onClick={handleNext} className="modal-btn">Siguiente Tema</button>}
                {currentQuestionIndex === themes[currentThemeIndex].questions.length - 1 && currentThemeIndex === themes.length - 1 && <button onClick={() => setIsCompleted(true)} className="modal-btn">Terminar</button>}
                <button onClick={handleCancel} className="modal-btn">Cancelar</button>
              </div>
            </div>
          </div>
        )}

        {isCompleted && (
          <ModalComponentGlobal
            title="¡Gracias por completar el cuestionario!"
            isActive={true}
            hdlOnclick={() => setIsCompleted(false)}
            titleGreen="Terminar"
            hdlOnClickGreen={() => setIsCompleted(false)}
          >
            <p>¡Has completado el cuestionario! te contactaremos a la brevedad.</p>
          </ModalComponentGlobal>
        )}
      </div>
    </>
  );
};

export default Questionnaire;
