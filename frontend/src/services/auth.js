import api from "./api";

export function signIn(email, password) {
  const response = api.post("/signin", {
    email,
    password
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    return error.response.status
  })
  return response
}
