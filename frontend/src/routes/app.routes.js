import React from "react";
import {View} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Main from "../pages/Main/";
import Register from "../pages/Register/";
import Settings from "../pages/Settings/Main";
import MainTopics from "../pages/Topics/Main/";
import Dashboard from "../pages/Topics/Dashboard"
import Chat from "../pages/Chat/";
import Users from '../pages/Chat/Users/'
import Topic from "../pages/Topics/Topic/"
import TopicsByCategory from '../pages/Topics/TopicsByCategory'

import  ContactProfile01 from '../pages/Chat/Components/Content/Messages/Contacts/Contact';
import  GroupOne  from '../pages/Chat/Components/Content/Messages/Online/Onlines';

import { OneConversationSelected } from '../pages/Chat/Components/Content/Messages/OneConversationSelected/OneConversationSelected';

import {useTopic} from '../contexts/topic'


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

  return routeName === "Mapa" ? false : false
}


const MainRoutes = () => (
  <Tab.Navigator
    tabBarOptions={{ keyboardHidesTabBar: true }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'Mapa') {
          if (focused) {
            iconName = 'map-marker'
            color = '#0000e6'
          } else
            iconName = 'location-arrow'
        } else if (route.name === 'Topicos') {
          if (focused) {
            iconName = 'paste'
            color = '#0000e6'
          }
          else
            iconName = 'paste'
        } else if (route.name === 'Chat') {
          if (focused) {
            iconName = 'comments'
            color = '#0000e6'
          }
          else
            iconName = 'comments'
        } else if (route.name === 'Configuracoes') {
          if (focused) {
            iconName = 'user'
            color = '#0000e6'
          } else
            iconName = 'user'
        }
        return <Icon name={iconName} size={25} color={color} />
      }

    })}>
    <Tab.Screen name="Mapa" component={Main} default />
    <Tab.Screen name="Topicos" component={MainTopics}
      options={{ headerShown: false }} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Configuracoes" component={Settings} />
  </Tab.Navigator >
)



const AppRoutes = () => {
  const {categoryName} = useTopic()
  return (
    < AppStack.Navigator >
      <AppStack.Screen name="Main" component={MainRoutes}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: getHeaderVisibility(route),
        })} />
      <AppStack.Screen name="Topic" component={Topic} />
      <AppStack.Screen name="TopicsByCategory" component={TopicsByCategory}
        options={({ navigation,route }) => ({
          headerStyle:{
            backgroundColor:'#0099ff',
            borderWidth:0,
            shadowRadius:0,
            shadowColor: 'transparent',
            elevation:0,
            shadowOffset: {
              height: 0,
          },
          },
          
          
          headerTintColor:'#fff',
          headerTitleAlign:'center',
            
      
          
          headerTitle: typeof(categoryName) === 'undefined' ? '' : categoryName })} />
      <AppStack.Screen name="Response" component={Response} />
      <AppStack.Screen name="GroupOne" component={GroupOne} />

    </AppStack.Navigator >
  )
};

export default AppRoutes; 
