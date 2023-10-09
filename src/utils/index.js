import { buildRequest, buildGetRequest } from './network'
//view resources-tabla-alumno
export async function consultingStudentsData () {
  const request = buildGetRequest('/list-registerStudents','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
// view lista de materiales view resources-tabla-materiales
export async function consultMaterials () {
  const request = buildGetRequest('/list-resources', 'GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json() : undefined
  return data
}
//lista de de profesores view resources-tabla-docente  
export async function consultTeacher () {
  const request = buildGetRequest('/list-teacher','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
//lista de los servicios a prestar del alumno
export async function consultService(){
  const request= buildGetRequest('/list-service','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data

}
// lista de las carreras del tese
export async function consultCareer () {
  const request = buildGetRequest('/list-carrer', 'GET')
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}
//view Application-Student
// lista de solicitud de alumnos para ingresar al tese
export async function consultingstudentsRequest (){
  const request = buildGetRequest('/consulting-studentsRequest','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
//lista de alumnos rechazados
export async function consultingstudentsRech (){
  const request = buildGetRequest('/consulting-studentsRech','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
// lista de alumnos que fueron aceptados
export async function consultingstudentsAccepts(){
  const request = buildGetRequest('/consulting-studentsAccepts','GET')
  const response = await fetch(request)

  const data = await response.json()
  return data
}
//view Proyects, 
//devuelve la lista de los proyectos registrados
export async function consultProjects () {
  const request = buildGetRequest('/list-proyects','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
// view Project Detail
// consulta para mostrar informacion de la view Proyect- detail
export async function listProjectInfo(id_project) {
  const request = buildGetRequest(`/consultingInfo-Project/${id_project}`, 'GET')
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  };
};
// consulta para mostrar los integrantes de proyect detail
export async function listStudentsInProject(id_project) {
  const request = buildGetRequest(`/Students-InProject/${id_project}`, 'GET')
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  };
};
// consulta para mostrar los recusos prestados para el prpoyecto
export async function listResourceBorrowedInProject(id_project) {
  const request = buildGetRequest(`/list-ResourceBorrowedInProject/${id_project}`, 'GET')
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  };
};
// consulta para mostrar los asesores asignados al proyecto
export async function adviserInProject(id_project) {
  const request = buildGetRequest(`/Adviser-InProject/${id_project}`, 'GET')
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  };
};

//Procedimiento post registro alumnos
export async function checkingInternalRegister (body) {
  const request = buildRequest('/register-users', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

//procedimiento GET para consulta de datos con ID 
export async function consultarMaterials (id_resource){
  const request = buildGetRequest('/consult-materials', 'GET', id_resource)
  const response = await fetch(request)

  const data = await response.json()
  return data;
}


//Procedimiento post registro materiales 
export async function insertResources (body) {
  const request = buildRequest('/add-resources', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

//Procedimiento DELETE para eliminación de materiales 
export async function deleteMaterials (body) {
  const request = buildRequest('/delete-materials', 'DELETE', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

//Procedimiento PUT para edición de materiales 
export async function editaMateriales (body) {
  const request = buildRequest('/edit-materials/', 'PUT', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

// Procedimiento POST para registro de Profesores 
export async function insertarTeacher (body) {
  const request = buildRequest('/add-advisers', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

//Procedimiento PUT para modificar un profesor 
export async function modificarTeacher (body) {
  const request = buildRequest('/edit-advisers/', 'PUT', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

//Procedimiento DELETE para eliminación de profesores 
export async function eliminarProfesor (body) {
  const request = buildRequest('api/delete-advisers', 'DELETE', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}


//_______________________________________________ Procedimientos por crear en el back y en la DB 

export async function checkingInternalUser (matricula) {
  const request = buildRequest('/users-checking', 'POST', { matricula })
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}
export async function consultingStudents () {
  const request = buildGetRequest('/consulting-students','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}



/*export async function checkingPassword (body) {
  const request = buildRequest('/register-users', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}*/



// ______________________________________Procedimientos para agregar datos
// agrega los integrantes de los proyectos
export async function addMembersProject(body) {
  const request = buildGetRequest(`/add-member-proyect`, 'POST', body)
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del usuario')
  }
}

