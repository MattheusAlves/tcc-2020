import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Main from "../pages/Main/";
import Register from "../pages/Register/";
import Settings from "../pages/Settings/";
import Topics from "../pages/Topics/Topic";
import Dashboard from "../pages/Topics/Dashboard"
import Chat from "../pages/Chat/";
import Users from '../pages/Chat/Users/'

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator()



function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
    route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    route.params?.screen || 'Mapa';

  switch (routeName) {
    case 'Mapa':
      return 'Tapa';
    case 'Topicos':
      return 'Tópicos';
    case 'Chat':
      return 'Chat';
    case 'Configuracoes':
      return 'Configurações'
  }
}
function getHeaderVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Mapa';

  return routeName === "Mapa" ? false : true
}


const MainRoutes = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName
      if (route.name === 'Mapa') {
        iconName = focused ? 'map-search-outline' : 'map-search'
      } else if (route.name === 'Topicos') {
        iconName = focused ? 'book-open-outline' : 'book-open'
      } else if (route.name === 'Chat') {
        iconName = focused ? 'message-text-outline' : 'message-text'
      } else if (route.name === 'Configuracoes') {
        iconName = focused ? 'account-settings-outline' : 'account-settings'
      }
      return <Icon name={iconName} size={30} />
    }

  })}>
    <Tab.Screen name="Mapa" component={Main} default />
    <Tab.Screen name="Topicos" component={Dashboard} options={{ headerStyle: { backgroundColor:'black' } }} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Configuracoes" component={Settings} />
  </Tab.Navigator >
)



const AppRoutes = (route) => {
  return (
    < AppStack.Navigator >
      <AppStack.Screen name="Main" component={MainRoutes}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: getHeaderVisibility(route),
          headerStyle: { backgroundColor:'#0baee1' } 
        })} />
    </AppStack.Navigator >
  )
};

export default AppRoutes;
