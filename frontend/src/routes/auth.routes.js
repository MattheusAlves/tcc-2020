import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/SignIn";
import Register from '../pages/Register'

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Login} options={{headerShown:false}} />
    <AuthStack.Screen name="Register" component={Register} options={{headerShown:true,title:'Login'}}/>
  </AuthStack.Navigator>
)

export default AuthRoutes;
