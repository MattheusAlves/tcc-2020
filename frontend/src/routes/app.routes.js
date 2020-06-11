import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../pages/Main/";
import Register from '../pages/Register'

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Main" component={Main}/>
    <AppStack.Screen name="Register" component={Register}/>
  </AppStack.Navigator>
);

export default AppRoutes;
