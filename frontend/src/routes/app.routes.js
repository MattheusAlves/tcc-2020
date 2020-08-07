import React from "react";
import { View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Main from "../pages/Main/";
import Register from "../pages/Register/";
import Settings from "../pages/Settings/";
import MainTopics from "../pages/Topics/Main/";
import Dashboard from "../pages/Topics/Dashboard"
import Chat from "../pages/Chat/";
import Users from '../pages/Chat/Users/'
import Topic from "../pages/Topics/Topic/"
import TopicsByCategory from '../pages/Topics/TopicsByCategory'

import { useTopic } from '../contexts/topic'


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
    tabBarOptions={{
      keyboardHidesTabBar: true,
      style: {
        backgroundColor: 'rgba(96,47,158,.8)',
        borderWidth: 0,
        borderTopColor: 'transparent',
        borderRadius:30,
        margin: 0,
        paddingHorizontal: 10,
        paddingVertical: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginBottom:4,
        marginHorizontal:6,
        position:'absolute'
      },
      inactiveTintColor:'white',
      activeTintColor:'black'
      
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'Mapa') {
          if (focused) {
            iconName = 'map-marker'
            color = 'rgb(110, 122, 219)'
          } else {
            iconName = 'location-arrow'
            color = 'white'
          }
        } else if (route.name === 'Topicos') {
          if (focused) {
            iconName = 'paste'
            // color = 'rgb(110, 122, 219)'
          }
          else {
            iconName = 'paste'
            color = 'white'
          }
        } else if (route.name === 'Chat') {
          if (focused) {
            iconName = 'comments'
            color = 'rgb(110, 122, 219)'
          }
          else {
            iconName = 'comments'
            color = 'white'
          }
        } else if (route.name === 'Configuracoes') {
          if (focused) {
            iconName = 'user'
            color = 'rgb(110, 122, 219)'
          } else {
            iconName = 'user'
            color = 'white'
          }
        }
        return <Icon name={iconName} size={28} color={color}  style={{shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        zIndex:30,
        elevation: 20,}}/>
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
  const { categoryName } = useTopic().topicData
  return (
    < AppStack.Navigator >
      <AppStack.Screen name="Main" component={MainRoutes}
        options={({ route }) => ({
          style:{
            backgroundColor:"blue"
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
