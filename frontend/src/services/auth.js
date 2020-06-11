import api from './api'
export function signIn(email, password) {
  console.log("Email:", email, " Senha:", password);

  const response = api.post("/signin", {
    email,
    password
  }).then(function (response) {
    return response
  }).catch(function (error) {
    console.log('false')
    return false
  })
}