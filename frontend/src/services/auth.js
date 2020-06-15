import api from "./api";
export function signIn(email, password) {
  console.log("Email:", email, " Senha:", password);

<<<<<<< HEAD
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
=======
  api.post("/signin", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(JSON.stringify(error.response.data.err));
      return error.response.data.err
    });
}
>>>>>>> 9d2f33eebdfaaae6571d010384a1528c8ecdb9c0
