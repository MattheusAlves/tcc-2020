import React, { createContext, useState } from 'react';
import { signIn } from '../services/auth'

const AuthContextData =  {
  signed: false,
  sign:sign()
}

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  async function sign() {
    const response = await signIn()

    setUser(response.user)
  }
  return (
    <AuthContext.Provider value={{ signed: false }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
