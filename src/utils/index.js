import { buildRequest, buildGetRequest } from './network'

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

export async function consultingStudentsData () {
  const request = buildGetRequest('/list-registerStudents','GET')
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

export async function consultService(){
  const request= buildGetRequest('/list-sex','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data

}
export async function consultCareer () {
  const request = buildGetRequest('/list-carrer', 'GET')
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}

export async function consultMaterials () {
  const request = buildGetRequest('/list-resources', 'GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json() : undefined
  return data
}

export async function consultTeacher () {
  const request = buildGetRequest('/list-teacher','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}

export async function consultProjects () {
  const request = buildGetRequest('/list-proyects','GET')
  const response = await fetch(request)

  const data = response.ok ? await response.json():undefined
  return data
}
