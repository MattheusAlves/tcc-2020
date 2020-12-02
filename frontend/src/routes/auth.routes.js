import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/SignIn';
import Register from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{headerShown: true, title: 'Login'}}
      options={() => ({
        headerTitle: 'Cadastre-se',
        headerTitleStyle:{
          color:'white'
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: 'rgba(69,68,68,1)'
        }
      })}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
