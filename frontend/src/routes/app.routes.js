import React from "react";
import { Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Main from "../pages/Main/";

const Tab = createBottomTabNavigator()

const MainRoutes = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName
      if (route.name === 'Map') {
        iconName = focused ? 'map-search' : 'map-search-outline'
      } else if (route.name === 'Topics') {
        iconName = focused ? 'book-open-outline' : 'book-open'
      } else if (route.name === 'Chat') {
        iconName = focused ? 'message-text-outline' : 'message-text'
      } else if (route.name === 'Settings') {
        iconName = focused ? 'account-settings-outline' : 'account-settings'
      }
      return <Icon name={iconName} size={30} />
    }


  })}>
    <Tab.Screen name="Map" component={Main} />
    <Tab.Screen name="Topics" component={() => { }} />
    <Tab.Screen name="Chat" component={() => { }} />
    <Tab.Screen name="Settings" component={() => { }} />
  </Tab.Navigator >
)

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Main" component={MainRoutes} />
  </AppStack.Navigator>
);

export default AppRoutes;
