import { buildRequest } from './network'

export async function getList (page, limit) {
  const request = buildRequest('/pokemon', 'GET')
  const response = await fetch(request)
  
  const data = response.ok ? await response.json() : undefined
  return data
}
