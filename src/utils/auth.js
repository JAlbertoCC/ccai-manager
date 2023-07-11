import { async } from 'q';
import { buildRequest } from './network';

export async function login (body) {
  const request = buildRequest('/login', 'POST', body);

  const response = await fetch(request);

  const data = await response.json();
  return data;
}


export async function forgotPasswordTwo (body) {
  const request = buildRequest('/forgot-password', 'POST', body);

  const response = await fetch(request)
  
  const data = await response.json();
  return data
}

// export async function checkingPassword (matricula,email) {
//   const request = buildRequest('/reset-password', 'GET')
//   const response = await fetch(request)
  
//   const data = response.ok ? await response.json() : undefined
//   return data
// }
