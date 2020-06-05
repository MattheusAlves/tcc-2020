import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/SignIn";


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name="SignIn" component={Login} />
  </AuthStack.Navigator>
)

export default AuthRoutes;
