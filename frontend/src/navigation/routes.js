import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../pages/Main";
import Auth from "../pages/Auth";

// https://heartbeat.fritz.ai/getting-started-with-react-native-and-expo-using-hooks-in-2020-fb466c25b04c

const Routes = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Main",
      },
    },
   
    Auth: {
      screen: Auth,
      navigationOptions: {
        header: () => null,
      },
    },
  },

  // { headerTitleAlign: "center" },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#7D40E7",
      },
    },
  }
);

export default createAppContainer(Routes);
