import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'

import Classes from "../pages/Classes";
import Register from "../pages/Register/";
import Settings from "../pages/Settings/";
import MainTopics from "../pages/Topics/Main/";
import Dashboard from "../pages/Topics/Dashboard"
import Chat from "../pages/Chat/";
import Users from '../pages/Chat/Users/'
import Topic from "../pages/Topics/Topic/"
import TopicsByCategory from '../pages/Topics/TopicsByCategory'
import Profile from '../pages/Profile/'


import { useCategory } from '../contexts/category'



// import Response from '../pages/Topics/Topic/Response'


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
  if(routeName == 'Perfil'){
    // return true
  }
  return routeName === "Mapa" ? false : false
}


const MainRoutes = () => (
  <Tab.Navigator
  t
    tabBarOptions={
    {
      keyboardHidesTabBar: true,
      tabStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:2,
        paddingTop:3
        
      },
      style: {
        backgroundColor: 'rgba(69,68,68,1)',
        borderWidth: 0,
        borderTopColor: 'transparent',
          
      },
      inactiveTintColor: 'rgba(255,255,255,.7 )',
      activeTintColor: 'rgba(88,150,241,1)',
      

    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Aulas') {
          return <Icon name='teach' size={25} color={color} />
        } else if (route.name === 'Tópicos') {
          return <IconFeather name='tablet' size={25} color={color} />
        } else if (route.name === 'Chat') {
          return <IconFeather name='message-square' size={25} color={color} />
        } else if (route.name === 'Perfil') {
          return <IconFeather name='user' size={25} color={color} />
        }
      }

    })}>
    <Tab.Screen name="Aulas" component={Classes} default />
    <Tab.Screen name="Tópicos" component={MainTopics}/>
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Perfil" component={Profile} />
  </Tab.Navigator >
)



const AppRoutes = () => {
  const { categoryName } = useCategory().categoryData
  return (
    < AppStack.Navigator >
      <AppStack.Screen name="Main" component={MainRoutes}
        options={({ route }) => ({
          style: {
            backgroundColor: "blue"
          },
          headerTitle: getHeaderTitle(route),
          headerShown: getHeaderVisibility(route),
        })} />

      <AppStack.Screen name="Topic" component={Topic} />
      <AppStack.Screen name="TopicsByCategory" component={TopicsByCategory}
        options={() => ({
          headerStyle: {
            backgroundColor: '#0099ff',
            borderWidth: 0,
            shadowRadius: 0,
            shadowColor: 'transparent',
            elevation: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: typeof (categoryName) === 'undefined' ? '' : categoryName
        })} />
      <AppStack.Screen name="Response" component={Response} />
    </AppStack.Navigator >
  )
};

export default AppRoutes; 
