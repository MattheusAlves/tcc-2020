import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import { signIn } from '../services/auth'
import api from '../services/api'

const AuthContextData = {
  signed: false,
  user: '',
  loading: false,
  sign: () => this(),
  signOut: () => this()

}

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {

      const storagedUser = await AsyncStorage.setItem('@SMSEAuth:user')
      const storagedToken = await AsyncStorage.setItem('@SMSEAuth:token')

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        setUser(JSON.parse(storagedUser))
      }
      setLoading(false)
    }
    loadStorageData()
  }, [])

  async function sign(email, password) {
   // const response = await signIn(email, password)
    let response = undefined
    setUser('logado')
    if (response && response.user && response.token) {
      console.log(response)
      setUser(response.user)

      api.defaults.headers['Authorization'] = `Bearer ${response.token}`
      await AsyncStorage.setItem('@SMSEAuth:user', JSON.stringify(response.user))
      await AsyncStorage.setItem('@SMSEAuth:token', response.token)
    }
  }
  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, sign, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}