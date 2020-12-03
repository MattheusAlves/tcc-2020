import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import ClassesList from '../pages/Classes/List';
import Classes from '../pages/Classes';
import ClassesManager from '../pages/Classes/ClassesManager';
import Settings from '../pages/Settings/UserSettings';
import MainTopics from '../pages/Topics/Main/';
import TopicsByCategory from '../pages/Topics/TopicsByCategory';
import Dashboard from '../pages/Topics/Dashboard';
import Topic from '../pages/Topics/Topic/';
import CreateTopic from '../pages/Topics/CreateTopic';
import Users from '../pages/Chat/Users/';
import Profile from '../pages/Profile/';
import Enroll from '../pages/Classes/enroll';
import TeacherRegistration from '../pages/TeacherRegistration';
import CreateClass from '../pages/Classes/Create';

import Chat from '../pages/Chat/';
import Room from '../pages/Chat/Room/';

import {useCategory} from '../contexts/category';

// import Response from '../pages/Topics/Topic/Response'

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      return 'Configurações';
  }
}
function getHeaderVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Mapa';
  if (routeName == 'Perfil') {
    // return true
  }
  return routeName === 'Mapa' ? false : false;
}

const MainRoutes = () => (
  <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
        paddingTop: 3,
      },
      style: {
        backgroundColor: 'rgba(69,68,68,1)',
        borderWidth: 0,
        borderTopColor: 'transparent',
      },
      inactiveTintColor: 'rgba(255,255,255,.7 )',
      activeTintColor: 'rgba(88,150,241,1)',
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'Aulas') {
          return <Icon name="teach" size={25} color={color} />;
        } else if (route.name === 'Tópicos') {
          return <IconFeather name="tablet" size={25} color={color} />;
        } else if (route.name === 'Chat') {
          return <IconFeather name="message-square" size={25} color={color} />;
        } else if (route.name === 'Perfil') {
          return <IconFeather name="user" size={25} color={color} />;
        }
      },
    })}>
    <Tab.Screen name="Aulas" component={Classes} default />
    <Tab.Screen name="Tópicos" component={MainTopics} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Perfil" component={Settings} />
  </Tab.Navigator>
);

const AppRoutes = () => {
  const {categoryName} = useCategory().categoryData;
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Main"
        component={MainRoutes}
        options={({route}) => ({
          style: {
            backgroundColor: 'blue',
          },
          headerTitle: getHeaderTitle(route),
          headerShown: getHeaderVisibility(route),
        })}
      />
      <AppStack.Screen
        name="CreateTopic"
        component={CreateTopic}
        options={() => ({
          headerTitle: 'Novo tópico',
          headerStyle: {
            backgroundColor: 'white',
            height:48,
          },
        })}
      />
      <AppStack.Screen name="Topic" component={Topic}  options={() => ({
        headerTintColor:'white',
        headerTitle:'Tópico',
        headerStyle: {
          backgroundColor: '#285BC8',
        }
      })}/>
      <AppStack.Screen
        name="TopicsByCategory"
        component={TopicsByCategory}
        options={() => ({
          headerStyle: {
            backgroundColor: '#285BC8',
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
          headerTitle: typeof categoryName === 'undefined' ? '' : categoryName,
        })}
      />
      <AppStack.Screen
        name="TopicDashboard"
        component={Dashboard}
        options={() => ({
          headerStyle: {
            backgroundColor: 'rgba(59,89,152,1)',
          },
          headerTintColor: 'white',
          headerTitle: 'Disciplinas',
          headerTitleStyle: {
            color: 'white',
          },
          headerTitleAlign: 'center',
        })}
      />
      <AppStack.Screen name="Response" component={Response} />
      <AppStack.Screen
        name="Enroll"
        component={Enroll}
        options={() => ({
          headerTitle: 'Matricula',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#3D7AFD',
          },
        })}
      />
      <AppStack.Screen name="Room" component={Room} options={() =>({
        // headerTitle:'Sala'
      }) }/>
      <AppStack.Screen
        name="TeacherRegistration"
        component={TeacherRegistration}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <AppStack.Screen
        name="ClassesList"
        component={ClassesList}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <AppStack.Screen
        name="CreateClass"
        component={CreateClass}
        options={() => ({
          headerShown: false,
          headerTitle: 'Registro de Aulas',
          headerStyle: {
            backgroundColor: 'rgba(59,89,152,1)',
            borderWidth: 0,
            borderWidth: 0,
            shadowRadius: 0,
            shadowColor: 'transparent',
            elevation: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        })}
      />
      <AppStack.Screen
      name="ClassesManager"
      component={ClassesManager}
      options={({route}) => ({
        headerShown: false,
      })}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
