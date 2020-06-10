import api from "./api";
export function signIn(email, password) {
  console.log("Email:", email, " Senha:", password);

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
