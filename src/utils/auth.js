import { async } from 'q';
import { buildRequest } from './network';

export async function login (body) {
  const request = buildRequest('/login', 'POST', body);

  const response = await fetch(request);

  const data = await response.json();
  return data;
}

export async function ForgotPassword (body) {
  const request = buildRequest('/reset-password', 'GET', body);
  const response = await fetch(request);

  const data = await response.json();
  return data;
}
