import { buildRequest, buildGetRequest } from './network';

export async function login (body) {
  const request = buildRequest('/login', 'POST', body);

  const response = await fetch(request);

  const data = await response.json();
  return data;
}

export async function restorePass(params,body) {
  const request = buildGetRequest(`/reset-password/${params}`, 'POST', body)
  const response = await fetch(request)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Error al obtener la información del proyecto')
  }
}
