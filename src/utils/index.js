import { buildRequest } from './network'

export async function checkingInternalUser (matricula) {
  const request = buildRequest('/users-checking', 'POST', { matricula })
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}

export async function checkingInternalRegister (matricula, name, lastnamef, lastnamem, adress, phone, gender, career, service, institutional_email, password) {
  const request = buildRequest('/api/register-users', 'POST', { matricula, name, lastnamef, lastnamem, adress, phone, gender, career, service, institutional_email, password})
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}
