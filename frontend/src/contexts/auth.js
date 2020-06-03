import { createContext,useState } from "react";
import * as auth from '../services/auth'
AuthContextData = {
    signed: Boolean,
    user: Object,
    signIn()
}

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({ children }) => {]
    const [user,setUser] = useState()
     async function signIn(){
        const response = await auth.signIn()
       
        setUser(response.user)
    }
  <AuthContext.Provider value={{ signed: false }}>
    {children}
  </AuthContext.Provider>;
};

export default AuthContext;
