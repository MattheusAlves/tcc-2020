import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {signIn} from '../services/auth';
import api from '../services/api';

const AuthContextData = {
  signed: false,
  user: '',
  loading: false,
  errorMessage: '',
  updateUser: () => this(),
  sign: () => this(),
  signOut: () => this(),
};

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@SMSEAuth:user'); //em produção alterar para getItem
      const storagedToken = await AsyncStorage.getItem('@SMSEAuth:token'); //em produção alterar para getItem

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function sign(email, password) {
    const response = await signIn(email, password);
    if (response && response.user && response.token) {
      setUser(response.user);

      api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
      await AsyncStorage.setItem(
        '@SMSEAuth:user',
        JSON.stringify(response.user),
      );
      await AsyncStorage.setItem('@SMSEAuth:token', response.token);
    } else {
      if (response === 404) {
        setErrorMessage('E-mail incorreto');
      } else if (response === 401) {
        setErrorMessage('Usuário ou senha incorretos');
      } else {
        setErrorMessage('Erro inesperado');
      }
    }
  }
  async function updateUser() {
    const {_id} = user;
    await AsyncStorage.removeItem('@SMSEAuth:user');
    await api
      .get(`/user/get/${_id}`)
      .then((response) => {
        setUser(response.data);
        AsyncStorage.setItem('@SMSEAuth:user', JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  }
  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        sign,
        signOut,
        errorMessage,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
