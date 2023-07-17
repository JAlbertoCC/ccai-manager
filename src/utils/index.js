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
//view Proyects, devuelve la lista de los proyectos registrados
export async function consultProjects () {
  const request = buildGetRequest('/list-proyects','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
// consulrtas para mostrar informacion de la view Proyects
export async function   consulProjectInfo(body) {
  const request = buildGetRequest(`/list-proyectInfo/${body}`, 'GET')
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  }
}
//_______________________________________________

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

export async function checkingInternalRegister (body) {
  const request = buildRequest('/register-users', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
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