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

export async function checkingInternalRegister (body) {
  const request = buildRequest('/register-users', 'POST', body)
  const response = await fetch(request)

  const data = await response.json()
  return data
}

export async function consultinService(){
  const request= buildGetRequest('/list-service','GET')
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
