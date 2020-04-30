import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from '../pages/Main'
import Auth from '../pages/Auth'

// https://heartbeat.fritz.ai/getting-started-with-react-native-and-expo-using-hooks-in-2020-fb466c25b04c

const StackNavigator = createStackNavigator(
    {
      MainPage: {
        screen: Main,
        title:'Main'
      }
      
    },
    { headerLayoutPreset: 'center',},
       {
      initialRouteName: 'MainPage',
      headerMode: 'screen'
    }
  )
  
  export default createAppContainer(StackNavigator)