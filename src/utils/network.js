const url = 'http://localhost:3001/api'

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export function buildRequest(uri, method, body) {
  return new Request(`${url}${uri}`, {
    method: method,
    body: JSON.stringify(body),
    headers: myHeaders,
    redirect: 'follow'
  })
}