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

const Tab = createBottomTabNavigator()
const AppStack = createStackNavigator();



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
      return 'Mapa';
    case 'Topicos':
      return 'Tópicos';
    case 'Chat':
      return 'My account';
  }
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
    <Tab.Screen name="Topicos" component={Topics} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Configuracoes" component={Settings} />
  </Tab.Navigator >
)



const AppRoutes = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle:getHeaderTitle(route) })
  }, [navigation, route])
  return (
    < AppStack.Navigator >
      <AppStack.Screen name="Main" component={MainRoutes} options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
        headerShown: (route) => {
          console.log("rote", route.state.routes[route.state.index].name)
          if (route.state.routes[route.state.index].name == "Topicos") { return false } return false
        }
      })} />
    </AppStack.Navigator >
  )
};

export default AppRoutes;
