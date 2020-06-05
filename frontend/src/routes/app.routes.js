import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../pages/Main/";

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Main" component={Main}/>
  </AppStack.Navigator>
);

export default AppRoutes;
