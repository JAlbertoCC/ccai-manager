const url="http://localhost:3001/api"

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
// se creo esta funcion para que se pueda realizar consultas con el metodo get
export function buildGetRequest(uri, method) {
  return new Request(`${url}${uri}`, {
    
    method: method,
    headers: myHeaders,
    redirect: 'follow'
  
  })

}