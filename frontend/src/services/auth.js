import api from './api'
export function signIn(){
      console.log("Email:", email, " Senha:", password);
      const response = await api
        .post("/signin", {
          email,
          password,
        })

        return response
}