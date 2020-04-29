import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {Main} from '../pages/Main'
// https://heartbeat.fritz.ai/getting-started-with-react-native-and-expo-using-hooks-in-2020-fb466c25b04c

const StackNavigator = createStackNavigator(
    {
      MainPage: {
        screen: Main
      }
    },
    {
      initialRouteName: 'MainPage',
      headerMode: 'none'
    }
  )
  
  export default createAppContainer(StackNavigator)