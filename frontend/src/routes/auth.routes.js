import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Signin";


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Login}/>
  </AuthStack.Navigator>
)

export default AuthRoutes;
